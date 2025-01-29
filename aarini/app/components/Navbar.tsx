'use client'

import { useState } from "react"
import Link from "next/link"
import { Shield, Map, Phone, MessageSquare, Navigation, Watch, Car, Users, ChevronRight, ChevronLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Shield },
    { href: "/safety-map", label: "Safety Map", icon: Map },
    { href: "/sos", label: "SOS", icon: Phone },
    { href: "/safe-route", label: "Safe Route", icon: Navigation },
    { href: "/smartwatch", label: "Smartwatch", icon: Watch },
    { href: "/rideshare", label: "Rideshare", icon: Car },
    { href: "/community", label: "Community", icon: Users },
    { href: "/contact", label: "Contact", icon: MessageSquare },
  ]

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-[#2D1B2D] transition-all duration-300 z-50 
      ${isExpanded ? 'w-64' : 'w-16'}`}
    >
      <nav className="h-full flex flex-col">
        <div className="flex-1 py-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-white/80 hover:text-white relative
                    ${isActive ? 'text-white' : ''}
                    ${isActive ? 'bg-[#B4325C]' : 'hover:bg-white/10'}`}
                  >
                    <item.icon className="w-6 h-6" />
                    {isExpanded && (
                      <span className="ml-4 text-sm font-medium">{item.label}</span>
                    )}
                    {isActive && (
                      <div className="absolute left-0 top-0 w-1 h-full bg-[#B4325C]" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full py-4 text-white/80 hover:text-white hover:bg-white/10"
        >
          {isExpanded ? (
            <ChevronLeft className="w-6 h-6" />
          ) : (
            <ChevronRight className="w-6 h-6" />
          )}
        </button>
      </nav>
    </div>
  )
}