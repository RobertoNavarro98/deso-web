import React from "react";
import { motion } from "framer-motion";

const items = [
  { label: "Aumento en productividad", value: "+30%" },
  { label: "Líneas automatizadas", value: "+15" },
  { label: "Plantas atendidas", value: "8" },
];

export default function KPIs(){
  return (
    <section className="py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 justify-between items-center">
        {items.map((it, idx) => (
          <motion.div key={idx} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-800 text-center min-w-[180px]" initial={{ y:10, opacity:0 }} whileInView={{ y:0, opacity:1 }} transition={{ duration:0.6, delay: idx*0.15 }}>
            <div className="text-3xl font-bold text-blue-300">{it.value}</div>
            <div className="text-sm text-gray-400 mt-2">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
