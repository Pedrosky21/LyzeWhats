"use client";
import { useState } from "react";

export default function InfoModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 bg-teal-dark rounded-xl cursor-pointer hover:bg-teal-light transition-colors"
        aria-label="Information"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-sm w-full relative transform transition-all" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-teal-dark mt-2">Información del Autor</h3>
            </div>
          <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-back rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-teal-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <div>
                  <p className="text-sm text-teal-light font-medium">Nombre</p>
                  <p className="text-teal-dark font-semibold">Pedro Arreguez</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-back rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-teal-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="text-sm text-teal-light font-medium">Email</p>
                  <a href="mailto:pedroarreguez21@gmail.com" className="text-teal-dark font-semibold hover:underline">
                    pedroarreguez21@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-5">
              <h4 className="text-lg font-bold text-teal-dark mb-3">¿Cómo exporto mi chat?</h4>
              <ol className="list-decimal pl-5 text-sm text-teal-light space-y-1">
                <li>Abrí WhatsApp en tu celular y entrá al chat.</li>
                <li>Tocá el menú (3 puntos) o el nombre del contacto.</li>
                <li>Elegí <strong>Más</strong> y luego <strong>Exportar chat</strong>.</li>
                <li>Seleccioná <strong>"Sin archivos"</strong> y guardá o compartite el `.txt`.</li>
              </ol>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-teal-dark text-white font-semibold rounded-lg hover:bg-teal-light transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
