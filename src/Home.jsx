import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por contactarnos. Pronto nos pondremos en contacto contigo.");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 shadow-md flex items-center justify-between border-b border-gray-700">
        {/* Bloque para logo */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-bold">LOGO</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">DESO</h1>
            <p className="text-lg">Desarrollos y Soluciones en Mantenimiento y Automatización</p>
          </div>
        </div>
      </header>

      {/* Servicios */}
      <section className="p-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-100">Mantenimiento Preventivo</h2>
          <p className="text-gray-400">
            Programas de mantenimiento diseñados para prevenir fallas y garantizar
            la continuidad de la producción.
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-100">Mantenimiento Correctivo</h2>
          <p className="text-gray-400">
            Reparación y sustitución inmediata de componentes para minimizar el
            tiempo de inactividad.
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-gray-100">Mantenimiento Predictivo</h2>
          <p className="text-gray-400">
            Uso de análisis y monitoreo para anticipar fallas y reducir costos en
            reparaciones.
          </p>
        </div>
      </section>

      {/* Automatización */}
      <section className="p-10 bg-gray-900 border-t border-b border-gray-800">
        <div className="max-w-4xl mx-auto bg-black border border-gray-700 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Soluciones y Automatización</h2>
          <p className="text-gray-400">
            Desarrollamos soluciones personalizadas de automatización para
            mejorar procesos, incrementar la eficiencia y resolver problemas
            específicos en el área de inyección de plásticos.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section className="p-10" id="contacto">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Contacto</h2>
          <p className="mb-4 text-gray-400">¿Necesitas más información o una cotización? Contáctanos:</p>
          <ul className="space-y-2 mb-6 text-gray-300">
            <li><strong>Teléfono:</strong> +52 477 123 4567</li>
            <li><strong>Email:</strong> contacto@deso.com.mx</li>
            <li><strong>Dirección:</strong> León, Guanajuato, México</li>
          </ul>

          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-200">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full border border-gray-700 bg-black rounded-lg p-2 text-gray-200"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-200">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-700 bg-black rounded-lg p-2 text-gray-200"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-200">Mensaje</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                className="w-full border border-gray-700 bg-black rounded-lg p-2 text-gray-200"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-gray-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-10 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} DESO, Desarrollos y Soluciones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
