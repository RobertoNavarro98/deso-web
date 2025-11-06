import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import emailjs from "emailjs-com";

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_123abc", // tu Service ID
      "template_xyz123", // tu Template ID
      form, // los datos del formulario
      "XyzA1B2C3D4" // tu Public Key
    )
    .then(
      () => {
        alert("✅ Tu mensaje se envió correctamente. Gracias por contactarnos.");
        setForm({ nombre: "", email: "", mensaje: "" });
      },
      (error) => {
        console.error("Error:", error);
        alert("❌ No se pudo enviar el mensaje. Inténtalo más tarde.");
      }
    );
};

export default function App(){
  return (
    <div className="min-h-screen text-gray-200 bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
