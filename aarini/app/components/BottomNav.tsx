import { Map, AlertTriangle, User } from "lucide-react"

export default function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "map", icon: Map, label: "Map" },
    { id: "report", icon: AlertTriangle, label: "Report" },
    { id: "profile", icon: User, label: "Profile" },
  ]

  return (
    <nav className="bg-forest-green text-ivory p-2">
      <ul className="flex justify-around">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-2 ${activeTab === tab.id ? "text-burgundy" : "text-ivory"}`}
            >
              <tab.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

