import React from "react";
import { motion } from "framer-motion";

const projects = []; // deja vacío o rellena como antes

export default function Projects(){
  return (
    <section id="proyectos" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-100 mb-4">Proyectos Realizados</h3>
        {projects.length === 0 ? (
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl text-gray-400">
            Aún no hay proyectos. Para añadirlos, edita <code>src_v2/components/Projects.jsx</code> y sigue la plantilla.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p,i) => (
              <motion.article key={i} initial={{ y:8, opacity:0 }} whileInView={{ y:0, opacity:1 }} transition={{ duration:0.5, delay:i*0.12 }} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-800">
                <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-100">{p.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
