import { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [tooltipIndex, setTooltipIndex] = useState(0);

  const mensajes = [
    "¿Necesitas ayuda?",
    "Chatea con un ingeniero",
    "Atención personalizada DESO",
  ];

  const mensajeWhatsApp = "Hola, me interesa un servicio de mantenimiento industrial con DESO.";

  const contactos = [
    { nombre: "Ing. Roberto Navarro", telefono: "524774132126" },
    { nombre: "Ing. Mario Estrada", telefono: "524791027636" },
  ];

  useEffect(() => {
    const interval = setInterval(() => setTooltipIndex((p) => (p + 1) % mensajes.length), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {showTooltip && !isOpen && (
        <div className="bg-gray-900 text-white text-sm rounded-full px-3 py-2 mb-2 shadow-lg animate-fade-in">
          {mensajes[tooltipIndex]}
        </div>
      )}

      <button
        onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
        onMouseEnter={() => setShowTooltip(false)}
        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg transition-transform transform hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>

      <div className={`flex flex-col items-end mt-2 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
        {contactos.map((c,i) => (
          <a key={i} href={`https://wa.me/${c.telefono}?text=${encodeURIComponent(mensajeWhatsApp)}`} target="_blank" rel="noreferrer" className="flex items-center bg-white text-gray-800 hover:bg-green-100 rounded-full px-4 py-2 mb-2 shadow-md transition-all">
            <FaWhatsapp size={20} className="text-green-500 mr-2" />
            <span className="text-sm font-medium">{c.nombre}</span>
          </a>
        ))}
      </div>

      {isOpen ? <FaChevronDown className="text-green-500 mt-2" /> : <FaChevronUp className="text-green-500 mt-2" />}
    </div>
  );
}
