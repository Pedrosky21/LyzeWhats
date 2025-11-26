"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";
import { AnalysisData } from "../types/analysis";

export default function AnalysisPage() {
  const [data, setData] = useState<AnalysisData | null>(null);

  // Cargar data desde sessionStorage
  useEffect(() => {
    const loadData = () => {
      const saved = sessionStorage.getItem("analysis");
      if (saved) {
        setData(JSON.parse(saved));
      }
    };

    loadData();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-3xl">
        No hay datos cargados. Volvé a subir tu chat.
      </div>
    );
  }

  const a =
    data.analysis.messages_by_sender[
      Object.keys(data.analysis.messages_by_sender)[0]
    ];
  const b =
    data.analysis.messages_by_sender[
      Object.keys(data.analysis.messages_by_sender)[1]
    ];
  const max = a + b;

  const pctA = (a / max) * 100;
  const pctB = (b / max) * 100;

  const topEmojis = Object.entries(data.analysis.top_emoji).slice(0, 5);

  const saludosTotal =
    data.analysis.saludos.buenos_dias_total +
    data.analysis.saludos.hasta_mañana_total;

  const convA =
    data.analysis.conversation_starts[
      Object.keys(data.analysis.conversation_starts)[0]
    ];
  const convB =
    data.analysis.conversation_starts[
      Object.keys(data.analysis.conversation_starts)[1]
    ];

  const frases = Object.entries(data.analysis.top_phrases)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const teAmoA =
    data.analysis.te_amo.te_amo_by_sender[
      Object.keys(data.analysis.te_amo.te_amo_by_sender)[0]
    ];
  const teAmoB =
    data.analysis.te_amo.te_amo_by_sender[
      Object.keys(data.analysis.te_amo.te_amo_by_sender)[1]
    ];

  const teAmoTotal = teAmoA + teAmoB;

  const pctTeAmoA = (teAmoA / teAmoTotal) * 100;

  return (
    <>
      <div className="flex flex-col h-dvh">
        <Header />
        <div className="flex-1 px-4 pb-4">
          <div className="h-full grid grid-cols-16 gap-4 p-4 bg-gray-back rounded-lg text-teal-dark text-2xl">
            <div className="flex flex-col col-span-5 bg-white rounded-lg shadow p-4 pt-2 text-center">
              <h2>Mensajes enviados</h2>
              <p className="font-elegante text-lg text-left">1.000.000</p>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative flex h-full w-4/6 justify-between">
                  <div className="absolute z-1 top-0 right-0 border-t h-1 w-80 border-t-teal-dark border-dashed"></div>
                  <div className="w-20 h-full bg-gray-back rounded-t-lg flex flex-col-reverse">
                    <div
                      className="relative w-20 bg-purple-dark rounded-t-lg"
                      style={{ height: `${pctA}%` }}
                    >
                      <div className="absolute z-1 top-0 border-t-2 h-1 w-40 border-t-purple-dark border-dashed"></div>
                      <span className="absolute z-1 -top-4 left-28 text-sm text-purple-dark">
                        {a}
                      </span>
                    </div>
                  </div>
                  <div className="w-20 h-full bg-gray-back rounded-t-lg flex flex-col-reverse">
                    <div
                      className="relative w-20 h-full bg-pastel-pink rounded-t-lg"
                      style={{ height: `${pctB}%` }}
                    >
                      <div className="absolute z-1 top-0 right-0 border-t-2 h-1 w-40 border-t-pastel-pink border-dashed"></div>
                      <span className="absolute z-1 -top-4 -left-20 text-sm text-pastel-pink">
                        {b}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 rounded-lg">
              <div className="w-full h-full grid grid-rows-2 grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow p-4 pt-2 col-span-2">
                  <h2>Emojis más usados</h2>
                  <div className="flex items-center h-full w-full">
                    <p className="text-8xl">{topEmojis[0]}</p>
                    <div className="flex bg-teal-dark rounded-lg">
                      <p className="text-7xl">{topEmojis[0]}</p>
                      <p className="text-7xl">{topEmojis[0]}</p>
                      <p className="text-7xl">{topEmojis[0]}</p>
                      <p className="text-7xl">{topEmojis[0]}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-linear-to-br from-teal-dark to-150% to-[#0FACBD] rounded-lg shadow p-4 text-white">
                  <h2 className="font-elegante text-5xl">
                    {Math.round(
                      data.analysis.conversation_duration
                        .average_duration_minutes
                    )}
                  </h2>
                  <p className="font-elegante text-lg">
                    duración promedio de las conversaciones
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <h2 className="font-elegante text-5xl">{saludosTotal} veces</h2>
                  <p className="font-elegante text-lg">
                    se dijeron buenos dias o hasta mañana
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-lg shadow p-4 pt-2 row-span-2">
              <h2 className="text-center">Lo más dicho</h2>
              <div className="flex flex-col space-y-2 pt-2">
                {frases.map(([frase]) => (
                  <div key={frase} className="bg-teal-dark rounded-l-lg rounded-br-lg px-2 py-1">
                    <p className="text-white text-lg">{`"${frase}"`}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-7 bg-white rounded-lg shadow p-4 pt-2 text-center">
              <h2>Conversaciones iniciadas</h2>
              <div className="flex justify-center h-7/8 w-full p-2">
                <div className="flex items-stretch h-full w-6/8 text-white font-elegante text-4xl">
                  <div className="bg-purple-dark flex-1 rounded-l-lg min-w-12 text-end p-2">
                    <p>{convA}</p>
                  </div>
                  <div className="bg-pastel-pink flex-1 rounded-r-lg min-w-12 text-start p-2">
                    <p>{convB}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex col-span-6 bg-white rounded-lg shadow px-4 pt-2">
              <div className="w-1/2">
                <h2 className="text-4xl font-divertida">TE AMO</h2>
                <h3 className="font-elegante">dichos por cada uno</h3>
              </div>
              <div className="flex items-center justify-center w-1/2 h-full">
                <div
                  className="w-40 h-40 rounded-full"
                  style={{
                    background: `conic-gradient(
                        var(--color-pastel-pink) ${pctTeAmoA}%,
                        var(--color-purple-dark) 0
                      )`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
