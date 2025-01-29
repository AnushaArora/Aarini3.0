// "use client"

// import { useState } from "react"
// import { Car, Users, MapPin, Clock } from "lucide-react"
// import Image from "next/image"

// export default function Rideshare() {
//   const [rideType, setRideType] = useState("women-only")

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-royal-purple">Safe Rideshare & Carpooling</h1>

//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Find a Safe Ride</h2>
//         <div className="flex flex-wrap mb-4">
//           <button
//             onClick={() => setRideType("women-only")}
//             className={`mr-2 mb-2 py-2 px-4 rounded-full ${rideType === "women-only" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
//           >
//             Women-Only Carpool
//           </button>
//           <button
//             onClick={() => setRideType("late-night")}
//             className={`mr-2 mb-2 py-2 px-4 rounded-full ${rideType === "late-night" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
//           >
//             Late Night Commute
//           </button>
//           <button
//             onClick={() => setRideType("workplace")}
//             className={`mr-2 mb-2 py-2 px-4 rounded-full ${rideType === "workplace" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
//           >
//             Workplace Transport
//           </button>
//         </div>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="pickup" className="block mb-1 text-charcoal-gray">
//               Pickup Location
//             </label>
//             <input
//               type="text"
//               id="pickup"
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
//               placeholder="Enter pickup location"
//             />
//           </div>
//           <div>
//             <label htmlFor="destination" className="block mb-1 text-charcoal-gray">
//               Destination
//             </label>
//             <input
//               type="text"
//               id="destination"
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
//               placeholder="Enter destination"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-royal-purple text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center w-full"
//           >
//             <Car className="mr-2" />
//             Find Safe Ride
//           </button>
//         </form>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Women-Only Carpooling</h2>
//           <p className="mb-4 text-charcoal-gray">
//             Connect with verified female drivers and passengers traveling in similar directions.
//           </p>
//           <Image
//             src="/images/cyber-security.gif?height=200&width=300"
//             alt="Women-Only Carpooling"
//             width={300}
//             height={200}
//             className="rounded-lg mb-4"
//           />
//           <ul className="list-disc list-inside text-charcoal-gray">
//             <li>Verified female drivers and passengers</li>
//             <li>In-app chat for coordination</li>
//             <li>Split costs for affordable travel</li>
//             <li>Build a trusted commute network</li>
//           </ul>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Safe Workplace Transport</h2>
//           <p className="mb-4 text-charcoal-gray">GPS-monitored transport for employees working late shifts.</p>
//           <Image
//             src="/images/gps-tracker.gif?height=200&width=300"
//             alt="Safe Workplace Transport"
//             width={300}
//             height={200}
//             className="rounded-lg mb-4"
//           />
//           <ul className="list-disc list-inside text-charcoal-gray">
//             <li>Real-time GPS tracking</li>
//             <li>Verified and trained drivers</li>
//             <li>Direct routes for faster commutes</li>
//             <li>Emergency button in vehicles</li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-royal-purple">How It Works</h2>
//         <ol className="list-decimal list-inside space-y-2 text-charcoal-gray">
//           <li>Choose your ride type: women-only carpool, late night commute, or workplace transport</li>
//           <li>Enter your pickup location and destination</li>
//           <li>The app matches you with suitable ride options or fellow carpoolers</li>
//           <li>Review driver/passenger profiles and ratings</li>
//           <li>Confirm your ride and enjoy a safe journey</li>
//           <li>Rate your experience to help build a safer community</li>
//         </ol>
//       </div>
//     </div>
//   )
// }
"use client";

import React, { useState } from "react";
import { Car } from "lucide-react";
import Image from "next/image";

const HomeScreen = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [results, setResults] = useState<Provider[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  ];

  const indianWomenNames = [
    "Aadhya", "Aanya", "Aarna", "Aditi", "Advika", "Ahana", "Aisha", "Akshara", 
    "Amira", "Ananya", "Anika", "Anvi", "Anya", "Avani", "Chetna", "Devi", "Diya", 
    "Divya", "Eesha", "Esha", "Fatima", "Geetika", "Gia", "Himani", "Ira", "Ishani", 
    "Ishita", "Jiya", "Kavya", "Keya", "Kiara", "Kimaya", "Krisha", "Lakshmi", "Mahika",
    "Mahi", "Manjari", "Mayra", "Mehak", "Meher", "Mira", "Miraya", "Mishka", "Myra",
    "Navya", "Nayantara", "Nisha", "Nitya", "Pari", "Prisha", "Riya", "Saanvi", "Samaira",
    "Sanvi", "Sara", "Sarika", "Shanaya", "Shreeya", "Siya", "Suhani", "Tara", "Trisha",
    "Vanya", "Zara", "Zoya"
  ];

  const allProviders = Array.from({ length: 100 }, (_, index) => {
    const pickupLocation = locations[index % locations.length];
    const dropoffLocation = locations[(index + 1) % locations.length];
    return {
      name: indianWomenNames[index % indianWomenNames.length],
      pickup: pickupLocation.name,
      dropoff: dropoffLocation.name,
    };
  });

  const findCarpool = () => {
    if (pickup === "" || dropoff === "") {
      alert("Please enter both pickup and drop-off locations.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setResults(allProviders.filter((provider) => provider.pickup === pickup));
      setIsLoading(false);
    }, 1000);
  };

  const addProvider = () => {
    const name = prompt("Enter your name");
    const providerPickup = pickup;
    const providerDropoff = dropoff;

    if (name && providerPickup && providerDropoff) {
      setProviders([...providers, { name, pickup: providerPickup, dropoff: providerDropoff }]);
    } else {
      alert("Please fill in all fields.");
    }
  };
  const [rideType, setRideType] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-royal-purple">Safe Rideshare & Carpooling</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Find a Safe Ride</h2>
        <div className="flex flex-wrap mb-4">
          <button
            onClick={() => setRideType("women-only")}
            className={`mr-2 mb-2 py-2 px-4 rounded-full ${rideType === "women-only" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
          >
            Women-Only Carpool
          </button>
          <button
            onClick={() => setRideType("late-night")}
            className={`mr-2 mb-2 py-2 px-4 rounded-full ${rideType === "late-night" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
          >
            Late Night Commute
          </button>
          <button
            onClick={() => setRideType("workplace")}
            className={`mr-2 mb-2 py-2 px-4 rounded-full ${rideType === "workplace" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
          >
            Workplace Transport
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="pickup" className="block mb-1 text-charcoal-gray">
              Pickup Location
            </label>
            <input
              type="text"
              id="pickup"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="destination" className="block mb-1 text-charcoal-gray">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
              placeholder="Enter destination"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={findCarpool}
              className="bg-royal-purple text-white py-2 px-4 rounded-full"
            >
              Find Ride
            </button>
            <button
              type="button"
              onClick={addProvider}
              className="bg-soft-pink text-royal-purple py-2 px-4 rounded-full"
            >
              Add Provider
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <p className="text-center text-charcoal-gray">Searching for rides...</p>
        ) : (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="bg-light-gray p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Car className="text-royal-purple" />
                  <div>
                    <h3 className="font-semibold text-charcoal-gray">{result.name}</h3>
                    <p className="text-sm text-charcoal-gray">{result.pickup} → {result.dropoff}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
