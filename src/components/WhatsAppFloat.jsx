import React from 'react'

export default function WhatsAppFloat(){
  // número principal (usa formato sin espacios para wa.me): 524774132126
  const phone = '524774132126'
  const message = encodeURIComponent('Hola, me interesa un servicio de mantenimiento industrial con DESO.')

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-6 z-50"
      aria-label="Chat por WhatsApp"
    >
      <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-105 transform transition">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a4 4 0 0 1-4 4H8l-4 4V5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4z" stroke="none" fill="white" />
        </svg>
      </div>
    </a>
  )
}
