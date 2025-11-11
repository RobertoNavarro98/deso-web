import React from "react";
export default function CTA(){
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-100">¿Tienes una máquina detenida?</h3>
        <p className="text-gray-400 mt-3">Escríbenos ahora y un ingeniero te contactará en menos de 30 minutos.</p>
        <div className="mt-6">
          <a href="#contacto" className="bg-desoBlue px-6 py-3 rounded-2xl font-semibold text-black">Contactar ahora</a>
        </div>
      </div>
    </section>
  );
}
