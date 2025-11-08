import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x:-30, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <div className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg">
            <img src="/logo.png" alt="DESO" className="w-44 mx-auto mb-3 object-contain" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-100">DESO</h1>
            <p className="text-gray-400 mt-1 font-oswald">Desarrollos y soluciones</p>
          </div>

          <h2 className="mt-8 text-3xl md:text-4xl font-extrabold text-gray-100 leading-tight">
            Mantenimiento industrial para máquinas de inyección de plásticos
          </h2>
          <p className="mt-4 text-gray-400">
            Planes preventivos, reparaciones rápidas, análisis predictivo y soluciones de automatización para mejorar tu OEE.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#contacto" className="bg-desoBlue px-5 py-3 rounded-2xl font-semibold text-black">Solicitar cotización</a>
            <a href="#servicios" className="border border-gray-700 px-5 py-3 rounded-2xl text-gray-300 hover:text-white">Ver servicios</a>
          </div>
        </motion.div>

        <motion.div initial={{ x:30, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }} className="rounded-2xl p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-800">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-6 bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-gray-100">24/7</div>
              <div className="text-xs text-gray-400">Respuesta</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-gray-100">99.5%</div>
              <div className="text-xs text-gray-400">Uptime objetivo</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-gray-100">+4 años</div>
              <div className="text-xs text-gray-400">Experiencia</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-gray-100">Robot IoT</div>
              <div className="text-xs text-gray-400">Monitorización</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
