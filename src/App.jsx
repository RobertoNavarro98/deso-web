import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import KPIs from "./components/KPIs";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="min-h-screen text-gray-200 bg-black">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <KPIs />
        <About />
        <Projects />
        <Contact />
        <CTA />
        <WhyUs />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
