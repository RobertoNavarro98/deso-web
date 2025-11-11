import React from "react";
import { motion } from "framer-motion";

export default function About(){
  return (
    <section id="nosotros" className="py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x:-20, opacity:0 }} whileInView={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <h3 className="text-2xl font-bold text-gray-100">Nosotros</h3>
          <p className="text-gray-400 mt-3">
            DESO ofrece servicios técnicos especializados en mantenimiento y automatización para la industria de inyección de plásticos. Nuestro equipo combina experiencia en PLC, visión artificial, integración y puesta en marcha.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800">
              <div className="font-semibold text-gray-100">Ing. Roberto Navarro</div>
              <div className="text-sm text-gray-400">Especialista en automatización industrial y visión por computadora.</div>
            </div>
            <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800">
              <div className="font-semibold text-gray-100">Ing. Mario Estrada</div>
              <div className="text-sm text-gray-400">Experto en mantenimiento mecánico y puesta en marcha de líneas.</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ x:20, opacity:0 }} whileInView={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
            <img src="/logo.png" alt="DESO" className="w-48 mx-auto object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
