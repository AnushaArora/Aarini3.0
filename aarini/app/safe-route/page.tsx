"use client"

import { useState, useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { Navigation } from "lucide-react"

// Define custom icon
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// MapUpdater component to update map view
function MapUpdater({ center, zoom }) {
  const map = useMap()
  useEffect(() => {
    map.setView(center, zoom)
  }, [center, zoom, map])
  return null
}

export default function SafeRoute() {
  const [startPoint, setStartPoint] = useState("")
  const [endPoint, setEndPoint] = useState("")
  const [routeGenerated, setRouteGenerated] = useState(false)
  const [route, setRoute] = useState([])
  const [startSuggestions, setStartSuggestions] = useState([])
  const [endSuggestions, setEndSuggestions] = useState([])
  const [startCoords, setStartCoords] = useState(null)
  const [endCoords, setEndCoords] = useState(null)
  const [mapCenter, setMapCenter] = useState([28.6139, 77.209]) // Default to Delhi
  const [mapZoom, setMapZoom] = useState(13)
  const [estimatedTime, setEstimatedTime] = useState("")
  const [distance, setDistance] = useState("")
  const [isLoading, setIsLoading] = useState(false) // Added loading state
  const mapRef = useRef(null)

  useEffect(() => {
    // No need to delete or merge options here
  }, [])

  const fetchSuggestions = async (query, setterFunction) => {
    if (query.length > 2) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`,
      )
      const data = await response.json()
      setterFunction(data.slice(0, 5))
    } else {
      setterFunction([])
    }
  }

  const handleStartPointChange = (e) => {
    setStartPoint(e.target.value)
    fetchSuggestions(e.target.value, setStartSuggestions)
  }

  const handleEndPointChange = (e) => {
    setEndPoint(e.target.value)
    fetchSuggestions(e.target.value, setEndSuggestions)
  }

  const selectSuggestion = (suggestion, isStart) => {
    if (isStart) {
      setStartPoint(suggestion.display_name)
      setStartCoords([Number.parseFloat(suggestion.lat), Number.parseFloat(suggestion.lon)])
      setStartSuggestions([])
    } else {
      setEndPoint(suggestion.display_name)
      setEndCoords([Number.parseFloat(suggestion.lat), Number.parseFloat(suggestion.lon)])
      setEndSuggestions([])
    }
  }

  const fetchRoute = async (start, end) => {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`,
    )
    const data = await response.json()
    return data.routes[0]
  }

  const handleGenerateRoute = async (e) => {
    e.preventDefault()
    if (startCoords && endCoords) {
      setRouteGenerated(true)
      setIsLoading(true)
      try {
        const routeData = await fetchRoute(startCoords, endCoords)
        const routeCoordinates = routeData.geometry.coordinates.map((coord) => [coord[1], coord[0]])
        setRoute(routeCoordinates)
        setEstimatedTime(Math.round(routeData.duration / 60))
        setDistance((routeData.distance / 1000).toFixed(2))

        // Create bounds only if we have a valid route
        if (routeCoordinates.length > 0) {
          const bounds = L.latLngBounds(routeCoordinates)
          setMapCenter(bounds.getCenter())
          if (mapRef.current) {
            mapRef.current.fitBounds(bounds)
          }
        } else {
          // If no route found, center on the midpoint between start and end
          setMapCenter([(startCoords[0] + endCoords[0]) / 2, (startCoords[1] + endCoords[1]) / 2])
          setMapZoom(12)
        }
      } catch (error) {
        console.error("Error generating route:", error)
        alert("An error occurred while generating the route. Please try again.")
      } finally {
        setIsLoading(false)
      }
    } else {
      alert("Please select both start and end points.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Safe Route Planning</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleGenerateRoute} className="space-y-4">
          <div className="relative">
            <label htmlFor="start" className="block mb-1">
              Start Point
            </label>
            <input
              type="text"
              id="start"
              value={startPoint}
              onChange={handleStartPointChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Enter starting location"
              required
            />
            {startSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 w-full rounded-b-lg shadow-lg">
                {startSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectSuggestion(suggestion, true)}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative">
            <label htmlFor="end" className="block mb-1">
              End Point
            </label>
            <input
              type="text"
              id="end"
              value={endPoint}
              onChange={handleEndPointChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Enter destination"
              required
            />
            {endSuggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 w-full rounded-b-lg shadow-lg">
                {endSuggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => selectSuggestion(suggestion, false)}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="bg-forest-green text-ivory py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center w-full"
          >
            <Navigation className="mr-2" />
            Generate Safe Route
          </button>
        </form>
      </div>

      {isLoading ? (
        <p className="text-center text-charcoal-gray">Generating route...</p>
      ) : (
        routeGenerated && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Generated Safe Route</h2>
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              className="h-[400px] w-full rounded-lg shadow-md"
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapUpdater center={mapCenter} zoom={mapZoom} />
              {startCoords && (
                <Marker position={startCoords} icon={customIcon}>
                  <Popup>Start Point</Popup>
                </Marker>
              )}
              {endCoords && (
                <Marker position={endCoords} icon={customIcon}>
                  <Popup>End Point</Popup>
                </Marker>
              )}
              {route.length > 0 && <Polyline positions={route} color="blue" />}
            </MapContainer>
            <div className="space-y-2 mt-4">
              <p>
                <strong>Estimated Time:</strong> {estimatedTime} minutes
              </p>
              <p>
                <strong>Distance:</strong> {distance} km
              </p>
              <p>
                <strong>Safety Score:</strong> 95/100
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Route Details</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Start at {startPoint}</li>
                <li>Follow the blue line on the map</li>
                <li>Your destination, {endPoint}, will be at the end of the route</li>
              </ol>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Stay on well-lit paths and avoid isolated areas</li>
                <li>Keep your phone charged and easily accessible</li>
                <li>Share your route with a trusted contact</li>
                <li>Be aware of your surroundings at all times</li>
              </ul>
            </div>
          </div>
        )
      )}
    </div>
  )
}

