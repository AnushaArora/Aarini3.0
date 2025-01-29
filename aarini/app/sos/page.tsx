"use client"

import { useState } from "react"
import { Phone, Send, Video, MessageCircle, Shield } from "lucide-react"

export default function SOS() {
  const [isSending, setIsSending] = useState(false)

  const handleSOS = (type) => {
    setIsSending(true)
    // Simulating SOS send action
    setTimeout(() => {
      setIsSending(false)
      alert(`${type} alert sent to emergency contacts and nearest police station!`)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Emergency Assistance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">SOS Alert</h2>
          <p className="mb-4">
            In case of emergency, use the SOS button to instantly alert your emergency contacts and the nearest police
            station.
          </p>
          <button
            onClick={() => handleSOS("SOS")}
            disabled={isSending}
            className={`w-full py-4 rounded-full text-xl font-bold ${
              isSending ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
            } text-white transition-colors flex items-center justify-center`}
          >
            {isSending ? (
              <>
                <Send className="animate-ping mr-2" />
                Sending SOS...
              </>
            ) : (
              <>
                <Phone className="mr-2" />
                Send SOS Alert
              </>
            )}
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quick Access Panel</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleSOS("Video")}
              className="p-4 bg-forest-green text-ivory rounded-lg flex flex-col items-center justify-center hover:bg-opacity-90 transition-colors"
            >
              <Video className="mb-2" />
              <span>Video Call</span>
            </button>
            <button
              onClick={() => handleSOS("Voice")}
              className="p-4 bg-forest-green text-ivory rounded-lg flex flex-col items-center justify-center hover:bg-opacity-90 transition-colors"
            >
              <Phone className="mb-2" />
              <span>Voice Call</span>
            </button>
            <button
              onClick={() => handleSOS("Message")}
              className="p-4 bg-forest-green text-ivory rounded-lg flex flex-col items-center justify-center hover:bg-opacity-90 transition-colors"
            >
              <MessageCircle className="mb-2" />
              <span>Send Message</span>
            </button>
            <button
              onClick={() => handleSOS("Silent")}
              className="p-4 bg-forest-green text-ivory rounded-lg flex flex-col items-center justify-center hover:bg-opacity-90 transition-colors"
            >
              <Shield className="mb-2" />
              <span>Silent Alert</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Choose the type of alert you need to send.</li>
          <li>Your real-time location will be shared with your emergency contacts and local authorities.</li>
          <li>Emergency contacts will be notified via SMS and in-app notifications.</li>
          <li>The nearest police station will be alerted with your location and chosen alert type.</li>
          <li>If you choose a video or voice call, you'll be connected to a 24/7 support center.</li>
          <li>
            The silent alert option will discreetly notify authorities without any visible or audible signs on your
            device.
          </li>
        </ol>
      </div>
    </div>
  )
}

