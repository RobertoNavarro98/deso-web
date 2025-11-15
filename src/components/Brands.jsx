import React from "react";
import { motion } from "framer-motion";

export default function Brands() {
  // Nombres indicativos — pon aquí los logos en /public/brands/
  const brands = [
    { name: "Lien Yu Machinery Co. Ltd", img: "/brands/lienyu.png" },
    { name: "Arburg", img: "/brands/arburg.png" },
    { name: "Haitian", img: "/brands/haitian.png" },
    { name: "Asian Plastic Machinery Co. Ltd", img: "/brands/asian.png" },
    { name: "Negri Bossi", img: "/brands/negribossi.png" },
    { name: "Ningbo Union Power Machinery", img: "/brands/up.jpg" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">Marcas con las que hemos trabajado</h3>
        <motion.div className="mt-4 flex items-center justify-center gap-8 flex-wrap" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:.8 }}>
          {brands.map((b,i) => (
            <div key={i} className="flex items-center justify-center h-14 w-44 filter grayscale opacity-80 hover:filter-none hover:opacity-100 transition">
              <img src={b.img} alt={b.name} className="max-h-12 object-contain" />
            </div>
          ))}
        </motion.div>
        <p className="text-gray-400 text-sm mt-4">y otras marcas nacionales e internacionales del sector.</p>
      </div>
    </section>
  );
}
