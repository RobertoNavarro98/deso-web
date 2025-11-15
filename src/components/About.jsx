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
