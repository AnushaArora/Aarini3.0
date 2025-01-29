import { Shield, Map, Phone, Users, Bell, Route } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Women's Protection",
      description: "Enhancing safety through community-driven solutions and real-time assistance.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      icon: Map,
      title: "Interactive Safety Map",
      description: "Real-time map showing safe and unsafe areas in your community.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      icon: Phone,
      title: "SOS Emergency Feature",
      description: "Quick access to emergency services and trusted contacts with one tap.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network committed to creating safer environments for women.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      icon: Bell,
      title: "Safety Alerts",
      description: "Receive real-time notifications about safety concerns in your area.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      icon: Route,
      title: "Safe Route Planning",
      description: "Plan your journey using the safest routes based on community data.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to SafetyGuard</h1>
        <p className="text-xl mb-8">Empowering women through community-driven safety solutions</p>
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Women supporting each other"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Link
          href="/safety-map"
          className="bg-forest-green text-ivory py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
        >
          Explore Safety Map
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="relative h-40 mb-4 rounded-md overflow-hidden">
              <Image src={feature.image || "/placeholder.svg"} alt={feature.title} layout="fill" objectFit="cover" />
            </div>
            <feature.icon className="w-12 h-12 text-forest-green mb-4" />
            <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
            <p className="mb-4">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl mb-8">Be part of the change. Help create safer spaces for everyone.</p>
        <Link
          href="/signup"
          className="bg-burgundy text-ivory py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
        >
          Sign Up Now
        </Link>
      </section>
    </main>
  )
}

