import { MapPin } from "lucide-react"

export default function SafetyMap() {
  return (
    <div className="relative h-full w-full bg-ivory">
      <div className="absolute inset-0 bg-forest-green bg-opacity-10"></div>
      <div className="absolute top-4 left-4 bg-ivory p-2 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span>Safe</span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <span>Caution</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span>Danger</span>
        </div>
      </div>
      <MapPin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-burgundy w-8 h-8" />
    </div>
  )
}

