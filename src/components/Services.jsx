import React from 'react'

export default function Services(){
  const items = [
    { title: 'Preventivo', text: 'Planificado, checklists, lubricación y calibraciones.' },
    { title: 'Correctivo', text: 'Diagnóstico y reparación rápida para minimizar paros.' },
    { title: 'Predictivo', text: 'Vibraciones, termografía y tendencias para anticipar fallas.' },
  ]

  return (
    <section id="servicios" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-100">Servicios</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((it,i)=>(
            <article key={i} className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
              <h4 className="font-semibold text-gray-100">{it.title}</h4>
              <p className="mt-2 text-gray-400 text-sm">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
