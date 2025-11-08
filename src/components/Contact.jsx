import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){
  const [form,setForm] = useState({ nombre:'', email:'', mensaje:'' })
  const [ok,setOk] = useState(false)
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Si usas EmailJS (reemplaza por tus IDs)
    const SERVICE_ID = "service_123abc";
    const TEMPLATE_ID = "template_5gb910t";
    const PUBLIC_KEY = "t6DVWUEFUyGBciIT7";

    const templateParams = {
      nombre: form.nombre,
      email: form.email,
      mensaje: form.mensaje
    }

    // Si no quieres EmailJS, comenta todo esto y simplemente simula confirmación
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setOk(true)
        setForm({ nombre:'', email:'', mensaje:'' })
        setTimeout(()=>setOk(false),4000)
      })
      .catch((err) => {
        console.error('Email error',err)
        alert('No se pudo enviar el mensaje. Intenta más tarde.')
      })
      .finally(()=>setLoading(false))
  }

  return (
    <section id="contacto" className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-100">Contacto</h3>
          <p className="mt-2 text-gray-400">Tel: <strong>+52 477 413 2126</strong></p>
          <p className="mt-1 text-gray-400">Tel (socio): <strong>+52 479 102 7636</strong></p>
          <p className="mt-1 text-gray-400">Email: <strong>navarro.roberto1998@outlook.com</strong></p>
          <p className="mt-4 text-gray-400">Dirección: León, Guanajuato, México</p>

          <div className="mt-4 text-xs text-gray-500">
            Si no quieres usar EmailJS, comenta la llamada a <code>emailjs.send()</code> en este archivo y reemplázala por la lógica que prefieras.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl space-y-4">
          {ok && <div className="p-3 bg-green-600 text-black rounded">✅ Gracias — recibimos tu mensaje.</div>}

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

          <button className="w-full py-3 rounded-2xl bg-desoBlue font-semibold text-black disabled:opacity-60" disabled={loading}>
            {loading ? 'Enviando…' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  )
}
