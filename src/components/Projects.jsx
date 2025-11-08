import React from 'react'

export default function Projects(){
  // ======= INSTRUCCIONES: ========
  // Para agregar un proyecto:
  // 1) Coloca una imagen en /public/projects/ (ej: proyecto1.png)
  // 2) Copia un objeto dentro del array `projects` con:
  //      { title: 'Título', desc: 'Breve descripción', img: '/projects/proyecto1.png', link: 'https://...' }
  // 3) Guarda y haz git commit + push — Vercel actualizará la web.
  //
  // Ejemplo (descomenta y usa como plantilla):
  // const projects = [
  //   { title: 'Automatización de inyectora', desc: 'Retrofit y control PLC', img: '/projects/proyecto1.png', link: '#' },
  // ]
  //
  // Por ahora lo dejo vacío para que tú lo rellenes.

  const projects = [] // <-- agrega tus objetos aquí según las instrucciones

  return (
    <section id="proyectos" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-100">Proyectos realizados</h3>
        <p className="text-gray-400 mt-2">Aquí podrás añadir tus trabajos destacados — copia el ejemplo en el comentario para agregar nuevos proyectos.</p>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <div className="col-span-full p-6 bg-gray-900 border border-gray-800 rounded-2xl text-gray-400">
              <div className="font-medium text-gray-100 mb-2">Aún no hay proyectos</div>
              <div>Sigue las instrucciones en el código para añadir tus proyectos y sus imágenes en <code>/public/projects/</code>.</div>
            </div>
          ) : (
            projects.map((p,i) => (
              <article key={i} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition">
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-100">{p.title}</h4>
                  <p className="text-gray-400 mt-2 text-sm">{p.desc}</p>
                  {p.link && <a href={p.link} className="mt-3 inline-block text-desoBlue font-medium">Ver más</a>}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
