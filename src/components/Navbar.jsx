import React from 'react'

export default function Navbar(){
  return (
    <header className="fixed w-full z-30 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="DESO logo" className="w-36 h-auto object-contain" />
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#automatizacion" className="hover:text-white">Automatización</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
