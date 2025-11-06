import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} DESO, Desarrollos y Soluciones.</div>
        <div>Política de privacidad • Términos</div>
      </div>
    </footer>
  )
}
