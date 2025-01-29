// "use client"

// import { useState } from "react"
// import { MapPin, Navigation } from "lucide-react"
// import Image from "next/image"

// export default function SafeRoute() {
//   const [startPoint, setStartPoint] = useState("")
//   const [endPoint, setEndPoint] = useState("")
//   const [routeGenerated, setRouteGenerated] = useState(false)

//   const handleGenerateRoute = (e) => {
//     e.preventDefault()
//     // Here you would typically call an API to generate the route
//     setRouteGenerated(true)
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Safe Route Planning</h1>

//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <form onSubmit={handleGenerateRoute} className="space-y-4">
//           <div>
//             <label htmlFor="start" className="block mb-1">
//               Start Point
//             </label>
//             <input
//               type="text"
//               id="start"
//               value={startPoint}
//               onChange={(e) => setStartPoint(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-forest-green"
//               placeholder="Enter starting location"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="end" className="block mb-1">
//               End Point
//             </label>
//             <input
//               type="text"
//               id="end"
//               value={endPoint}
//               onChange={(e) => setEndPoint(e.target.value)}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-forest-green"
//               placeholder="Enter destination"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-forest-green text-ivory py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center w-full"
//           >
//             <Navigation className="mr-2" />
//             Generate Safe Route
//           </button>
//         </form>
//       </div>

//       {routeGenerated && (
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Generated Safe Route</h2>
//           <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-4">
//             <Image src="/placeholder.svg?height=400&width=800" alt="Safe Route Map" layout="fill" objectFit="cover" />
//             {/* Add route visualization here */}
//           </div>
//           <div className="space-y-2">
//             <p>
//               <strong>Estimated Time:</strong> 25 minutes
//             </p>
//             <p>
//               <strong>Distance:</strong> 3.2 km
//             </p>
//             <p>
//               <strong>Safety Score:</strong> 95/100
//             </p>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-xl font-semibold mb-2">Route Details</h3>
//             <ol className="list-decimal list-inside space-y-2">
//               <li>Start at {startPoint}</li>
//               <li>Head north on Main St for 500m</li>
//               <li>Turn right onto Safe Ave and continue for 1km</li>
//               <li>Use the well-lit pedestrian bridge to cross River Rd</li>
//               <li>Continue on Community Blvd for 700m</li>
//               <li>Your destination, {endPoint}, will be on the right</li>
//             </ol>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Stay on well-lit paths and avoid isolated areas</li>
//               <li>Keep your phone charged and easily accessible</li>
//               <li>Share your route with a trusted contact</li>
//               <li>Be aware of your surroundings at all times</li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Navigation } from "lucide-react";

export default function SafeRoute() {
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [routeGenerated, setRouteGenerated] = useState(false);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  const handleGenerateRoute = (e) => {
    e.preventDefault();
    setRouteGenerated(true);
    // Simulated route coordinates (Replace with actual route calculation logic)
    setRoute([
      [28.6684, 77.2296],
      [28.6675, 77.2305],
      [28.6665, 77.2315],
      [28.6655, 77.2320],
    ]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Safe Route Planning</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleGenerateRoute} className="space-y-4">
          <div>
            <label htmlFor="start" className="block mb-1">Start Point</label>
            <input
              type="text"
              id="start"
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Enter starting location"
              required
            />
          </div>
          <div>
            <label htmlFor="end" className="block mb-1">End Point</label>
            <input
              type="text"
              id="end"
              value={endPoint}
              onChange={(e) => setEndPoint(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Enter destination"
              required
            />
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

      {routeGenerated && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Generated Safe Route</h2>
          <MapContainer center={[28.6684, 77.2296]} zoom={15} className="h-[400px] w-full rounded-lg shadow-md">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[28.6684, 77.2296]}>
              <Popup>Start Point</Popup>
            </Marker>
            <Marker position={[28.6655, 77.2320]}>
              <Popup>End Point</Popup>
            </Marker>
            <Polyline positions={route} color="blue" />
          </MapContainer>
          <div className="space-y-2 mt-4">
            <p><strong>Estimated Time:</strong> 25 minutes</p>
            <p><strong>Distance:</strong> 3.2 km</p>
            <p><strong>Safety Score:</strong> 95/100</p>
          </div>
          <div className="mt-4">
             <h3 className="text-xl font-semibold mb-2">Route Details</h3>
             <ol className="list-decimal list-inside space-y-2">
              <li>Start at {startPoint}</li>
              <li>Head north on Main St for 500m</li>
              <li>Turn right onto Safe Ave and continue for 1km</li>
              <li>Use the well-lit pedestrian bridge to cross River Rd</li>
              <li>Continue on Community Blvd for 700m</li>
              <li>Your destination, {endPoint}, will be on the right</li>
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
       )}
     </div>
        
      )}
   
  