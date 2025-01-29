import "./globals.css"
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar"
import React from 'react'; // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aarini",
  description: "Empowering women through community-driven safety solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-ivory text-burgundy`}>
        <Navbar />
        <main className="pl-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}