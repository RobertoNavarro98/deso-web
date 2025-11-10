import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const mensaje = "Hola, me interesa un servicio de mantenimiento industrial con DESO.";
  const telefono = "524774132126"; // Sin signos ni espacios

  return (
    <a
      href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
