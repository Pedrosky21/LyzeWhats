"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadBar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFile = async (file: File | null) => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://lyzewhats-back.onrender.com/api/upload", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (!res.ok) {
      alert("Error procesando el archivo");
      return;
    }

    const data = await res.json();

    sessionStorage.setItem("analysis", JSON.stringify(data));

    // Ir a otra página
    router.push("/analysis");
  };

  return (
    <>
      <label
        htmlFor="fileInput"
        className="flex items-center justify-center p-4 rounded-lg bg-teal-dark w-5/6"
      >
        {loading ? (
          <p className="text-gray-400 text-4xl font-divertida2">Procesando...</p>
        ) : (
          <div className="flex space-x-6">
            <p className="text-4xl font-divertida2 text-white">
              Analizá tu chat
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-white"
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
        />
      </label>
    </>
  );
}
