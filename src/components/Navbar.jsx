import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-40 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="DESO logo" className="w-36 h-auto object-contain" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#proyectos" className="hover:text-white">Proyectos</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-gray-900/50"
        >
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 border-t border-gray-800"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#servicios" onClick={() => setOpen(false)} className="text-gray-300">Servicios</a>
            <a href="#proyectos" onClick={() => setOpen(false)} className="text-gray-300">Proyectos</a>
            <a href="#contacto" onClick={() => setOpen(false)} className="text-gray-300">Contacto</a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
