import React from "react";

export default function Footer(){
  return (
    <footer className="border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} DESO, Desarrollos y Soluciones.</div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="mailto:contacto@deso.com.mx" className="text-gray-400 hover:text-white">contacto@deso.com.mx</a>
        </div>
      </div>
    </footer>
  );
}
