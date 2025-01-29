"use client"

import { useState } from "react"
import { AlertTriangle, MessageSquare, ThumbsUp, Users } from "lucide-react"
import Image from "next/image"

export default function Community() {
  const [activeTab, setActiveTab] = useState("report")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-royal-purple">Community Solutions</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex mb-4">
          <button
            onClick={() => setActiveTab("report")}
            className={`mr-2 py-2 px-4 rounded-full ${activeTab === "report" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
          >
            Report an Issue
          </button>
          <button
            onClick={() => setActiveTab("respond")}
            className={`mr-2 py-2 px-4 rounded-full ${activeTab === "respond" ? "bg-royal-purple text-white" : "bg-soft-pink text-royal-purple"}`}
          >
            Respond to SOS
          </button>
        </div>

        {activeTab === "report" && (
          <form className="space-y-4">
            <div>
              <label htmlFor="issue-type" className="block mb-1 text-charcoal-gray">
                Issue Type
              </label>
              <select
                id="issue-type"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
              >
                <option>Harassment</option>
                <option>Broken Streetlight</option>
                <option>Unsafe Area</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block mb-1 text-charcoal-gray">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 text-charcoal-gray">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-royal-purple"
                placeholder="Describe the issue"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-royal-purple text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center w-full"
            >
              <AlertTriangle className="mr-2" />
              Submit Report
            </button>
          </form>
        )}

        {activeTab === "respond" && (
          <div className="space-y-4">
            <p className="text-charcoal-gray">
              Nearby SOS alerts will appear here. Be prepared to offer assistance or contact authorities if needed.
            </p>
            <div className="bg-soft-pink p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-royal-purple mb-2">SOS Alert: 2 km away</h3>
              <p className="text-charcoal-gray mb-2">Location: Central Park, near the fountain</p>
              <button className="bg-royal-purple text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors">
                Respond to SOS
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Anonymous Reporting</h2>
          <p className="mb-4 text-charcoal-gray">
            Report safety concerns anonymously to help improve community safety.
          </p>
          <Image
            src="/images/Anonymus.png?height=200&width=300"
            alt="Anonymous Reporting"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside text-charcoal-gray">
            <li>Protect your identity</li>
            <li>Report various safety issues</li>
            <li>Help update safety maps</li>
            <li>Contribute to safer neighborhoods</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Bystander Intervention</h2>
          <p className="mb-4 text-charcoal-gray">Learn how to safely intervene and support others in need.</p>
          <Image
            src="/images/help.jpg?height=200&width=300"
            alt="Bystander Intervention"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <ul className="list-disc list-inside text-charcoal-gray">
            <li>Receive alerts about nearby incidents</li>
            <li>Access intervention techniques</li>
            <li>Connect with local authorities</li>
            <li>Build a supportive community network</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-royal-purple">Community Impact</h2>
        <div className="flex flex-wrap justify-around text-center">
          <div className="mb-4">
            <p className="text-4xl font-bold text-royal-purple">250+</p>
            <p className="text-charcoal-gray">Issues Reported</p>
          </div>
          <div className="mb-4">
            <p className="text-4xl font-bold text-royal-purple">80%</p>
            <p className="text-charcoal-gray">Resolution Rate</p>
          </div>
          <div className="mb-4">
            <p className="text-4xl font-bold text-royal-purple">5000+</p>
            <p className="text-charcoal-gray">Active Community Members</p>
          </div>
        </div>
      </div>
    </div>
  )
}

