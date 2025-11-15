import { useState } from "react";

export default function Projects() {
  // 🔧 Aquí puedes agregar o quitar proyectos fácilmente
  const [projects] = useState([
    {
      id: 1,
      titulo: "Optimización de máquina de inyección vertical",
      descripcion:
        "Implementamos un sistema de control automático para mejorar la eficiencia y reducir paros no programados. Se integraron contadores y controladores PLC Siemens.",
      imagen: "/projects/vertical.webp", // cambia por tu imagen real
      resultados: [
        "Aumento del 25% en la productividad.",
        "Reducción de 30% en fallas eléctricas.",
        "Integración completa con red industrial existente."
      ]
    },
    {
      id: 2,
      titulo: "Instalación de nueva línea de producción",
      descripcion:
        "Programación de robot y calibración de maquinaria de inyección de plásticos UP, con puesta en marcha y capacitación al personal técnico.",
      imagen: "/projects/robotmachine.jpg",
      resultados: [
        "Instalación completa en 5 horas.",
        "Capacitación a 6 técnicos.",
        "Cumplimiento de normas NOM y seguridad industrial."
      ]
    },
    {
      id: 3,
      titulo: "Puesta en marcha de máquina en desuso y abandonada",
      descripcion:
        "Diseño de una solución predictiva para detectar vibraciones y temperatura en moldes de inyección, enviando alertas en tiempo real.",
      imagen: "/projects/asian.jpg",
      resultados: [
        "Corroboración de funcionalidad hidráulica, neumática y eléctrica.",
        "Pruebas con molde.",
        "Reducción de inactividad en planta."
      ]
    },
  ]);

  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6" id="proyectos">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-400 mb-3">Proyectos Realizados</h2>
        <p className="text-gray-400 text-lg">
          Algunos de los trabajos más destacados de DESO en mantenimiento, instalación y automatización industrial.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Imagen */}
            <div className="h-56 bg-gray-700 flex items-center justify-center overflow-hidden">
              {proyecto.imagen ? (
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400">[Agrega una imagen en /public/projects]</span>
              )}
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-400 mb-4">{proyecto.descripcion}</p>
              <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                {proyecto.resultados.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
