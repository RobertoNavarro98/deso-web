import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Wrench, Timer } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-400" />,
      title: "Calidad Garantizada",
      desc: "Trabajamos bajo estándares industriales para asegurar resultados óptimos."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-400" />,
      title: "Respuesta Inmediata",
      desc: "Atención rápida para evitar tiempos muertos en producción."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-400" />,
      title: "Seguridad Primero",
      desc: "Experiencia en maquinaria de inyección y normas de seguridad industrial."
    },
    {
      icon: <Wrench className="w-10 h-10 text-blue-400" />,
      title: "Expertos en Inyección",
      desc: "Mantenimiento, instalación y automatización de maquinaria plástica."
    },
    {
      icon: <Timer className="w-10 h-10 text-blue-400" />,
      title: "Eficiencia Máxima",
      desc: "Optimizamos ciclos, parámetros y hardware para mayor productividad."
    },
  ];

  return (
    <section className="py-20 bg-black text-gray-200" id="whyus">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Por qué elegir a DESO?
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Más de 10 años de experiencia ofreciendo soluciones técnicas, instalación de maquinaria,
          mantenimiento especializado y automatización industrial en la industria del plástico.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-400/20 transition border border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
