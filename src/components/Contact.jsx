import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_123abc",   // <-- remplaza con tu Service ID
        "template_5gb910t",  // <-- remplaza con tu Template ID
        form,
        "t6DVWUEFUyGBciIT7"    // <-- remplaza con tu Public Key
      )
      .then(
        () => {
          alert("✅ Tu mensaje fue enviado correctamente. Gracias por contactarnos.");
          setForm({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          console.error("Error:", error);
          alert("❌ Hubo un problema al enviar el mensaje. Intenta más tarde.");
        }
      );
  };

  return (
    <section id="contacto" className="p-10 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Contáctanos</h2>

        <p className="mb-6 text-center">
          Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-gray-900 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 bg-gray-900 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-600 bg-gray-900 rounded-lg p-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-600"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}



