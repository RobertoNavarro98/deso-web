import React, { useState } from 'react'

export default function Contact(){
  const [form,setForm] = useState({ nombre:'', email:'', mensaje:'' })
  const [ok,setOk] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No DB ni correo: solo confirmación local
    setOk(true)
    setForm({ nombre:'', email:'', mensaje:'' })
    setTimeout(()=>setOk(false), 4000)
  }

  return (
    <section id="contacto" className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-100">Contacto</h3>
          <p className="mt-2 text-gray-400">Tel: <strong>+52 477 123 4567</strong></p>
          <p className="mt-1 text-gray-400">Email: <strong>navarro.roberto1998@outlook.com</strong></p>
          <p className="mt-4 text-gray-400">Dirección: León, Guanajuato, México</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl space-y-4">
          {ok && <div className="p-3 bg-green-700 text-black rounded">Gracias — recibimos tu mensaje.</div>}
          <div>
            <label className="text-sm text-gray-200">Nombre</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} required className="w-full mt-1 p-3 rounded bg-black border border-gray-700 text-gray-200" />
          </div>
          <div>
            <label className="text-sm text-gray-200">Correo</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full mt-1 p-3 rounded bg-black border border-gray-700 text-gray-200" />
          </div>
          <div>
            <label className="text-sm text-gray-200">Mensaje</label>
            <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required rows="4" className="w-full mt-1 p-3 rounded bg-black border border-gray-700 text-gray-200"></textarea>
          </div>
          <button className="w-full py-3 rounded-2xl bg-desoBlue font-semibold text-black">Enviar</button>
        </form>
      </div>
    </section>
  )
}
