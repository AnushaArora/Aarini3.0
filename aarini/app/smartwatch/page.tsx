"use client"

import { useState } from "react"
import { Watch, Mic, MapPin, PhoneCall } from "lucide-react"
import Image from "next/image"
import { Button } from "../components/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
export default function SmartwatchAssistance() {
  const [isTracking, setIsTracking] = useState(false)

  const toggleTracking = () => {
    setIsTracking(!isTracking)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-royal-purple">Smartwatch Assistance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Voice-Activated SOS</h2>
          <p className="mb-4 text-charcoal-gray">
            Quickly activate SOS alerts using voice commands on your smartwatch.
          </p>
          <button className="bg-royal-purple text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center w-full">
            <Mic className="mr-2" />
            Activate Voice SOS
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Live Tracking</h2>
          <p className="mb-4 text-charcoal-gray">Enable live tracking to share your location with trusted contacts.</p>
          <button
            onClick={toggleTracking}
            className={`${isTracking ? "bg-soft-pink text-royal-purple" : "bg-royal-purple text-white"} py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center w-full`}
          >
            <MapPin className="mr-2" />
            {isTracking ? "Stop Tracking" : "Start Tracking"}
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Quick Access to Emergency Contacts</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Mom", "Dad", "Sister", "Friend", "Local Police"].map((contact, index) => (
            <button
              key={index}
              className="bg-soft-pink text-royal-purple py-2 px-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              <PhoneCall className="mr-2" />
              {contact}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-royal-purple">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/images/smartwatch.gif?height=300&width=300"
              alt="Smartwatch Assistance"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <ol className="list-decimal list-inside space-y-2 text-charcoal-gray md:w-1/2">
            <li>Set up your smartwatch with the SafetyGuard app</li>
            <li>Configure voice commands for quick SOS activation</li>
            <li>Add and prioritize emergency contacts</li>
            <li>Enable location sharing for live tracking</li>
            <li>In case of emergency, use voice commands or tap SOS on your watch</li>
            <li>The app will alert your contacts and share your live location</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

