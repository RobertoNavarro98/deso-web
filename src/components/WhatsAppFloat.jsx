import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const mensaje = "Hola, me interesa un servicio de mantenimiento industrial con DESO.";

  // Tu número y el de tu socio (formato internacional sin signos)
  const whatsapp1 = "524774132126"; // Roberto
  const whatsapp2 = "524791027636"; // Socio

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Tu botón */}
      <a
        href={`https://wa.me/${whatsapp1}?text=${encodeURIComponent(mensaje)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Contactar por WhatsApp Roberto"
        title="Contactar a Roberto (DESO)"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Botón del socio */}
      <a
        href={`https://wa.me/${whatsapp2}?text=${encodeURIComponent(mensaje)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Contactar por WhatsApp Socio"
        title="Contactar a Socio (DESO)"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}
