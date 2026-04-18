"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadBar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File | null) => {
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://lyzewhats-back.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      });

      setLoading(false);

      if (!res.ok) {
        setError("Hubo un error procesando el archivo. Por favor, intentá de nuevo.");
        return;
      }

      const data = await res.json();
      sessionStorage.setItem("analysis", JSON.stringify(data));
      router.push("/analysis");
    } catch (err) {
      setLoading(false);
      setError("Error de conexión. Es probable que el servidor se esté iniciando, por favor esperá unos segundos e intentá nuevamente. 😴");
    }
  };

  return (
    <div className="w-full relative flex flex-col items-center md:items-start">
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s linear infinite;
        }
      `}</style>
      
      <label
        htmlFor={loading ? undefined : "fileInput"}
        className={`flex items-center justify-center p-4 rounded-lg w-full md:w-5/6 transition-all relative overflow-hidden ${
          loading ? "bg-teal-light cursor-wait" : "bg-teal-dark cursor-pointer hover:opacity-90"
        }`}
      >
        {loading && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-teal-dark overflow-hidden">
            <div className="h-full w-1/3 bg-white/80 rounded-full animate-loading-bar"></div>
          </div>
        )}
        
        {loading ? (
          <div className="flex flex-col items-center justify-center z-10 w-full py-1">
            <p className="text-white text-3xl md:text-4xl font-divertida2 mb-1 animate-pulse">Procesando...</p>
            <p className="text-white/80 text-xs md:text-sm font-medium text-center px-2">
              (Esto puede tardar un minuto, el servidor gratuito se está despertando 😴)
            </p>
          </div>
        ) : (
          <div className="flex space-x-4 md:space-x-6 items-center z-10">
            <p className="text-3xl md:text-4xl font-divertida2 text-white">
              Analizá tu chat
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 md:w-10 md:h-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
        )}
        
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          style={{ display: "none" }}
          disabled={loading}
        />
      </label>
      
      {error && (
        <div className="w-full md:w-5/6 mt-3 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg flex items-start text-sm shadow-sm transition-all animate-in fade-in slide-in-from-top-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
