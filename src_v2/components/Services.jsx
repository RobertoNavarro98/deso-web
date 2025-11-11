import React from 'react'

export default function Services(){
  const items = [
    { title: 'Mantenimiento Preventivo', text: 'Planificado, checklists, lubricación y calibraciones.' },
    { title: 'Mantenimiento Correctivo', text: 'Diagnóstico y reparación rápida para minimizar paros.' },
    { title: 'Mantenimiento Predictivo', text: 'Vibraciones, termografía y tendencias para anticipar fallas.' },
    { title: 'Instalación de maquinaria', text: 'Instalación segura y certificada de líneas y máquinas de inyección.' },
    { title: 'Puesta en marcha', text: 'Configuración, pruebas y ajuste fino para producción eficiente.' },
    { title: 'Capacitaciones', text: 'Formación técnica a operarios y mantenimiento para operación segura.' }
  ]

  return (
    <section id="servicios" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-100">Servicios</h3>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it,i)=>(
            <article key={i} className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-100">{it.title}</h4>
              <p className="mt-2 text-gray-400 text-sm">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
