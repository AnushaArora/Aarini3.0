// "use client"

// import { useState } from "react"
// import { MapPin, AlertTriangle, CheckCircle, Info } from "lucide-react"
// import Image from "next/image"



// const safetyData = [
//   { id: 1, lat: 28.6684, lng: 77.2296, status: "safe", description: "Well-lit area with regular police patrols" },
//   { id: 2, lat: 28.6659, lng: 77.2276, status: "caution", description: "Isolated area after dark, stay vigilant" },
//   { id: 3, lat: 28.667, lng: 77.231, status: "danger", description: "Recent incidents reported, avoid if possible" },
//   // Add more data points as needed
// ]

// export default function SafetyMap() {
//   const [selectedArea, setSelectedArea] = useState(null)

//   const handleAreaClick = (area) => {
//     setSelectedArea(area)
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Safety Map - Your location</h1>
//       <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//         <p className="mb-2">
//           This interactive map shows safe and unsafe areas based on user reports and official data. Click on an area to
//           view more details or report an incident.
//         </p>
//         <div className="flex space-x-4">
//           <span className="flex items-center">
//             <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div> Safe
//           </span>
//           <span className="flex items-center">
//             <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div> Caution
//           </span>
//           <span className="flex items-center">
//             <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div> Danger
//           </span>
//         </div>
//       </div>
//       <div className="relative h-[600px] bg-gray-200 rounded-lg overflow-hidden">
//         {/* <Image src="/placeholder.svg?height=600&width=800" alt="Map of Kashmere Gate" layout="fill" objectFit="cover" /> */}
        
//         {safetyData.map((point) => (
//           <div
//             key={point.id}
//             className={`absolute w-6 h-6 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
//             style={{
//               top: `${(1 - (point.lat - 28.665) / 0.005) * 100}%`,
//               left: `${((point.lng - 77.227) / 0.005) * 100}%`,
//               backgroundColor: point.status === "safe" ? "green" : point.status === "caution" ? "yellow" : "red",
//             }}
//             onClick={() => handleAreaClick(point)}
//           ></div>
//         ))}
//       </div>
//       {selectedArea && (
//         <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-2 flex items-center">
//             {selectedArea.status === "safe" ? (
//               <>
//                 <CheckCircle className="text-green-500 mr-2" /> Safe Area
//               </>
//             ) : selectedArea.status === "caution" ? (
//               <>
//                 <AlertTriangle className="text-yellow-500 mr-2" /> Caution Area
//               </>
//             ) : (
//               <>
//                 <AlertTriangle className="text-red-500 mr-2" /> Danger Area
//               </>
//             )}
//           </h2>
//           <p className="mb-2">{selectedArea.description}</p>
//           <div className="flex space-x-2">
//             <button className="bg-forest-green text-ivory py-1 px-4 rounded-full text-sm hover:bg-opacity-90 transition-colors flex items-center">
//               <Info className="mr-1" /> More Info
//             </button>
//             <button className="bg-burgundy text-ivory py-1 px-4 rounded-full text-sm hover:bg-opacity-90 transition-colors flex items-center" href="/community">
//               <AlertTriangle className="mr-1" /> Report Incident
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { MapPin, AlertTriangle, CheckCircle, Info } from "lucide-react"

const safetyData = [
  { id: 1, lat: 28.6684, lng: 77.2296, status: "safe", description: "Well-lit area with regular police patrols" },
  { id: 2, lat: 28.6659, lng: 77.2276, status: "caution", description: "Isolated area after dark, stay vigilant" },
  { id: 3, lat: 28.667, lng: 77.231, status: "danger", description: "Recent incidents reported, avoid if possible" },
]

export default function SafetyMap() {
  const [selectedArea, setSelectedArea] = useState(null)

  const handleAreaClick = (area) => {
    setSelectedArea(area)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Safety Map - Your Location</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <p className="mb-2">
          This interactive map shows safe and unsafe areas based on user reports and official data. Click on an area to
          view more details or report an incident.
        </p>
        <div className="flex space-x-4">
          <span className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div> Safe
          </span>
          <span className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div> Caution
          </span>
          <span className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div> Danger
          </span>
        </div>
      </div>

      <div className="relative h-[600px] bg-gray-200 rounded-lg overflow-hidden">
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.834510540402!2d77.30062219999999!3d28.6646734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2d97ff9653%3A0xa236359e084edd43!2sGuru%20Gobind%20Singh%20Indraprastha%20University%20(East%20Delhi%20Campus)!5e0!3m2!1sen!2sin!4v1738160925164!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Safety Points */}
        {safetyData.map((point) => (
          <div
            key={point.id}
            className={`absolute w-6 h-6 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
            style={{
              top: `${(1 - (point.lat - 28.665) / 0.005) * 100}%`,
              left: `${((point.lng - 77.227) / 0.005) * 100}%`,
              backgroundColor: point.status === "safe" ? "green" : point.status === "caution" ? "yellow" : "red",
            }}
            onClick={() => handleAreaClick(point)}
          ></div>
        ))}
      </div>

      {selectedArea && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            {selectedArea.status === "safe" ? (
              <>
                <CheckCircle className="text-green-500 mr-2" /> Safe Area
              </>
            ) : selectedArea.status === "caution" ? (
              <>
                <AlertTriangle className="text-yellow-500 mr-2" /> Caution Area
              </>
            ) : (
              <>
                <AlertTriangle className="text-red-500 mr-2" /> Danger Area
              </>
            )}
          </h2>
          <p className="mb-2">{selectedArea.description}</p>
          <div className="flex space-x-2">
            <button className="bg-green-600 text-white py-1 px-4 rounded-full text-sm hover:bg-green-700 transition-colors flex items-center">
              <Info className="mr-1" /> More Info
            </button>
            <button className="bg-red-600 text-white py-1 px-4 rounded-full text-sm hover:bg-red-700 transition-colors flex items-center">
              <AlertTriangle className="mr-1" /> Report Incident
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
