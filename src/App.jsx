import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen text-gray-200 bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Projects />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
