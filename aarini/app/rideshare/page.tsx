"use client"

import React, { useState } from "react"
import { Car } from "lucide-react"

const HomeScreen = () => {
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const [results, setResults] = useState<Provider[]>([])
  const [providers, setProviders] = useState<Provider[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filteredPickupLocations, setFilteredPickupLocations] = useState([])
  const [filteredDropoffLocations, setFilteredDropoffLocations] = useState([])
  const [contactedProvider, setContactedProvider] = useState<string | null>(null)
  const [view, setView] = useState<"find" | "add">("find")
  const [hasSearched, setHasSearched] = useState(false)

  const locations = [
    { name: "Vasant Kunj", landmark: "DLF Promenade" },
    { name: "Karol Bagh", landmark: "Ghaffar Market" },
    { name: "Connaught Place", landmark: "India Gate" },
    { name: "Rajpath", landmark: "Rashtrapati Bhavan" },
    { name: "Mehrauli", landmark: "Qutub Minar" },
    { name: "Lodhi Road", landmark: "Lodhi Gardens" },
    { name: "Old Delhi", landmark: "Jama Masjid" },
    { name: "Chandni Chowk", landmark: "Red Fort" },
    { name: "Hauz Khas", landmark: "Hauz Khas Complex" },
    { name: "Nizamuddin", landmark: "Humayun's Tomb" },
    { name: "Pragati Maidan", landmark: "Purana Qila" },
    { name: "Chanakyapuri", landmark: "National Rail Museum" },
    { name: "Daryaganj", landmark: "Sunday Book Market" },
    { name: "Saket", landmark: "Select Citywalk" },
    { name: "Okhla", landmark: "Lotus Temple" },
    { name: "Tilak Marg", landmark: "National Gallery of Modern Art" },
    { name: "Sundar Nagar", landmark: "Sunder Nursery" },
    { name: "Paharganj", landmark: "Main Bazaar" },
    { name: "Sarojini Nagar", landmark: "Sarojini Nagar Market" },
    { name: "Kashmiri Gate", landmark: "ISBT Kashmiri Gate" },
    { name: "Anand Vihar", landmark: "ISBT Anand Vihar" },
    { name: "Dwarka", landmark: "Dwarka Sector 21 Metro" },
    { name: "Rohini", landmark: "Adventure Island" },
    { name: "Lajpat Nagar", landmark: "Central Market" },
    { name: "South Extension", landmark: "South Ex Market" },
    { name: "Greater Kailash", landmark: "M Block Market" },
    { name: "Delhi Cantonment", landmark: "Delhi Cantt Railway Station" },
    { name: "Ashok Vihar", landmark: "Deep Market" },
    { name: "Pitampura", landmark: "Netaji Subhash Place" },
    { name: "Mayur Vihar", landmark: "Mayur Vihar Metro Station" },
    { name: "Nehru Place", landmark: "Nehru Place Market" },
    { name: "Jor Bagh", landmark: "Safdarjung Tomb" },
    { name: "AIIMS", landmark: "AIIMS Hospital" },
    { name: "IGI Airport", landmark: "Indira Gandhi International Airport" },
    { name: "Delhi University", landmark: "North Campus" },
    { name: "Delhi University", landmark: "South Campus" },
    { name: "Janpath", landmark: "Janpath Market" },
    { name: "Sadar Bazaar", landmark: "Sadar Bazaar Market" },
    { name: "Laxmi Nagar", landmark: "Laxmi Nagar Metro Station" },
    { name: "New Friends Colony", landmark: "Community Centre" },
    { name: "Punjabi Bagh", landmark: "Club Road" },
    { name: "Chattarpur", landmark: "Chattarpur Mandir" },
    { name: "Munirka", landmark: "JNU Gate" },
    { name: "Yamuna Bank", landmark: "Yamuna Bank Metro Station" },
    { name: "Indirapuram", landmark: "Shipra Mall" },
    { name: "Noida", landmark: "DLF Mall of India" },
    { name: "Gurgaon", landmark: "Cyber Hub" },
    { name: "Faridabad", landmark: "Surajkund" },
    { name: "Ghaziabad", landmark: "Ghaziabad Railway Station" },
  ]

  const indianWomenNames = [
    "Aadhya",
    "Aanya",
    "Aarna",
    "Aditi",
    "Advika",
    "Ahana",
    "Aisha",
    "Akshara",
    "Amira",
    "Ananya",
    "Anika",
    "Anvi",
    "Anya",
    "Avani",
    "Chetna",
    "Devi",
    "Diya",
    "Divya",
    "Eesha",
    "Esha",
    "Fatima",
    "Geetika",
    "Gia",
    "Himani",
    "Ira",
    "Ishani",
    "Ishita",
    "Jiya",
    "Kavya",
    "Keya",
    "Kiara",
    "Kimaya",
    "Krisha",
    "Lakshmi",
    "Mahika",
    "Mahi",
    "Manjari",
    "Mayra",
    "Mehak",
    "Meher",
    "Mira",
    "Miraya",
    "Mishka",
    "Myra",
    "Navya",
    "Nayantara",
    "Nisha",
    "Nitya",
    "Pari",
    "Prisha",
    "Riya",
    "Saanvi",
    "Samaira",
    "Sanvi",
    "Sara",
    "Sarika",
    "Shanaya",
    "Shreeya",
    "Siya",
    "Suhani",
    "Tara",
    "Trisha",
    "Vanya",
    "Zara",
    "Zoya",
  ]

  const allProviders = Array.from({ length: 100 }, (_, index) => {
    const pickupLocation = locations[index % locations.length]
    const dropoffLocation = locations[(index + 1) % locations.length]
    return {
      name: indianWomenNames[index % indianWomenNames.length],
      pickup: pickupLocation.name,
      dropoff: dropoffLocation.name,
    }
  })

  const findCarpool = () => {
    if (pickup === "" || dropoff === "") {
      alert("Please enter both pickup and drop-off locations.")
      return
    }

    setIsLoading(true)
    setHasSearched(true)

    setTimeout(() => {
      // Filter providers where both pickup and dropoff match the user's input
      const matchingProviders = [...allProviders, ...providers].filter(
        (provider) => provider.pickup === pickup && provider.dropoff === dropoff,
      )
      setResults(matchingProviders)
      setIsLoading(false)
    }, 1000)
  }

  const addProvider = (name: string, providerPickup: string, providerDropoff: string) => {
    if (name && providerPickup && providerDropoff) {
      const newProvider = { name, pickup: providerPickup, dropoff: providerDropoff }
      setProviders([...providers, newProvider])

      // If the new provider matches the current search, add them to the results
      if (providerPickup === pickup && providerDropoff === dropoff) {
        setResults((prevResults) => [...prevResults, newProvider])
      }

      alert(`Provider ${name} added successfully!`)
      setView("find")
    } else {
      alert("Please fill in all fields.")
    }
  }

  const handlePickupChange = (e) => {
    const value = e.target.value
    setPickup(value)
    setFilteredPickupLocations(
      locations.filter((location) => location.name.toLowerCase().includes(value.toLowerCase())),
    )
  }

  const handleDropoffChange = (e) => {
    const value = e.target.value
    setDropoff(value)
    setFilteredDropoffLocations(
      locations.filter((location) => location.name.toLowerCase().includes(value.toLowerCase())),
    )
  }

  const selectPickupLocation = (location) => {
    setPickup(location.name)
    setFilteredPickupLocations([])
  }

  const selectDropoffLocation = (location) => {
    setDropoff(location.name)
    setFilteredDropoffLocations([])
  }

  const handleContactClick = (providerName: string) => {
    setContactedProvider(providerName)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-royal-purple">Safe Rideshare & Carpooling</h1>

      {view === "find" ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Find a Safe Ride</h2>
          <form className="space-y-4">
            <div className="relative">
              <label htmlFor="pickup" className="block mb-1 text-charcoal-gray">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickup"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
                placeholder="Enter pickup location"
                value={pickup}
                onChange={handlePickupChange}
              />
              {filteredPickupLocations.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 mt-1 max-h-60 overflow-y-auto z-10">
                  {filteredPickupLocations.map((location) => (
                    <li
                      key={location.name}
                      onClick={() => selectPickupLocation(location)}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      {location.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <label htmlFor="destination" className="block mb-1 text-charcoal-gray">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
                placeholder="Enter destination"
                value={dropoff}
                onChange={handleDropoffChange}
              />
              {filteredDropoffLocations.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 mt-1 max-h-60 overflow-y-auto z-10">
                  {filteredDropoffLocations.map((location) => (
                    <li
                      key={location.name}
                      onClick={() => selectDropoffLocation(location)}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      {location.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button type="button" onClick={findCarpool} className="bg-royal-purple text-white py-2 px-4 rounded-full">
                Find Ride
              </button>
              <button
                type="button"
                onClick={() => setView("add")}
                className="bg-soft-pink text-royal-purple py-2 px-4 rounded-full"
              >
                Add Provider
              </button>
            </div>
          </form>
        </div>
      ) : (
        <AddProviderForm onSubmit={addProvider} onCancel={() => setView("find")} locations={locations} />
      )}

      {view === "find" && (
        <div className="space-y-4">
          {isLoading ? (
            <p className="text-center text-charcoal-gray">Searching for rides...</p>
          ) : results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="bg-light-gray p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Car className="text-royal-purple" />
                      <div>
                        <h3 className="font-semibold text-charcoal-gray">{result.name}</h3>
                        <p className="text-sm text-charcoal-gray">
                          {result.pickup} → {result.dropoff}
                        </p>
                      </div>
                    </div>
                    {contactedProvider === result.name ? (
                      <p className="text-sm text-green-600">You will be contacted by {result.name}</p>
                    ) : (
                      <button
                        onClick={() => handleContactClick(result.name)}
                        className="bg-royal-purple text-white py-2 px-4 rounded-full text-sm"
                      >
                        Contact
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : hasSearched ? (
            <p className="text-center text-charcoal-gray">No Rider Available</p>
          ) : null}
        </div>
      )}
    </div>
  )
}

const AddProviderForm = ({ onSubmit, onCancel, locations }) => {
  const [name, setName] = useState("")
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const [filteredPickupLocations, setFilteredPickupLocations] = useState([])
  const [filteredDropoffLocations, setFilteredDropoffLocations] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(name, pickup, dropoff)
  }

  const handlePickupChange = (e) => {
    const value = e.target.value
    setPickup(value)
    setFilteredPickupLocations(
      locations.filter((location) => location.name.toLowerCase().includes(value.toLowerCase())),
    )
  }

  const handleDropoffChange = (e) => {
    const value = e.target.value
    setDropoff(value)
    setFilteredDropoffLocations(
      locations.filter((location) => location.name.toLowerCase().includes(value.toLowerCase())),
    )
  }

  const selectPickupLocation = (location) => {
    setPickup(location.name)
    setFilteredPickupLocations([])
  }

  const selectDropoffLocation = (location) => {
    setDropoff(location.name)
    setFilteredDropoffLocations([])
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Add Provider</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-charcoal-gray">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="providerPickup" className="block mb-1 text-charcoal-gray">
            Start Location
          </label>
          <input
            type="text"
            id="providerPickup"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
            placeholder="Enter your start location"
            value={pickup}
            onChange={handlePickupChange}
            required
          />
          {filteredPickupLocations.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 mt-1 max-h-60 overflow-y-auto z-10 w-full">
              {filteredPickupLocations.map((location) => (
                <li
                  key={location.name}
                  onClick={() => selectPickupLocation(location)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {location.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative">
          <label htmlFor="providerDropoff" className="block mb-1 text-charcoal-gray">
            Destination
          </label>
          <input
            type="text"
            id="providerDropoff"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
            placeholder="Enter your destination"
            value={dropoff}
            onChange={handleDropoffChange}
            required
          />
          {filteredDropoffLocations.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 mt-1 max-h-60 overflow-y-auto z-10 w-full">
              {filteredDropoffLocations.map((location) => (
                <li
                  key={location.name}
                  onClick={() => selectDropoffLocation(location)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {location.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-royal-purple text-white py-2 px-4 rounded-full">
            Add Provider
          </button>
          <button type="button" onClick={onCancel} className="bg-soft-pink text-royal-purple py-2 px-4 rounded-full">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default HomeScreen

interface Provider {
  name: string
  pickup: string
  dropoff: string
}

