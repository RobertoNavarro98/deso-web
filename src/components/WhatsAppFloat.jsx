import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const mensaje = "Hola, me interesa un servicio de mantenimiento industrial con DESO.";

  const contactos = [
    {
      nombre: "Ing. Roberto Navarro",
      telefono: "524774132126",
    },
    {
      nombre: "Ing. Mario Estrada",
      telefono: "524791027636",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {contactos.map((contacto, index) => (
        <a
          key={index}
          href={`https://wa.me/${contacto.telefono}?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          aria-label={`Contactar a ${contacto.nombre} por WhatsApp`}
          title={`Contactar a ${contacto.nombre}`}
        >
          <FaWhatsapp size={28} className="mr-2" />
          <span className="hidden sm:inline text-sm font-medium">
            {contacto.nombre}
          </span>
        </a>
      ))}
    </div>
  );
}
