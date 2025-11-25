import Header from "./components/header";

export default function AnalysisPage() {
  const a = 80;
  const b = 20;

  const max = 100;

  const pctA = (a / max) * 100;
  const pctB = (b / max) * 100;

  const masDichos = [
    "te amo",
    "te extraño",
    "texto largo para ver como quedaria si hay mucho",
    "te amo",
    "te amo",
  ];

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
                    <p className="text-8xl">🔥</p>
                    <div className="flex bg-teal-dark rounded-lg">
                      <p className="text-7xl">🔥</p>
                      <p className="text-7xl">🔥</p>
                      <p className="text-7xl">🔥</p>
                      <p className="text-7xl">🔥</p>
                    </div>
                  </div>
                </div>
                <div className="bg-linear-to-br from-teal-dark to-150% to-[#0FACBD] rounded-lg shadow p-4 text-white">
                  <h2 className="font-elegante text-5xl">40min</h2>
                  <p className="font-elegante text-lg">
                    duración promedio de las conversaciones
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <h2 className="font-elegante text-5xl">500 veces</h2>
                  <p className="font-elegante text-lg">
                    se dijeron buenos dias o hasta mañana
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-lg shadow p-4 pt-2 row-span-2">
              <h2 className="text-center">Lo más dicho</h2>
              <div className="flex flex-col space-y-2 pt-2">
                {masDichos.map((frase, i) => (
                  <div
                    key={i}
                    className="bg-teal-dark rounded-l-lg rounded-br-lg px-2 py-1"
                  >
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
                    <p>520</p>
                  </div>
                  <div className="bg-pastel-pink flex-1 rounded-r-lg min-w-12 text-start p-2">
                    <p>520</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex col-span-6 bg-white rounded-lg shadow px-4 pt-2">
              <div className="w-1/2">
                <h2 className="font-divertida">TE AMO</h2>
                <h3 className="font-elegante">dichos por cada uno</h3>
              </div>
              <div className="flex items-center justify-center w-1/2 h-full">
                <div
                  className="w-40 h-40 rounded-full"
                  style={{
                    background: `conic-gradient(
                        var(--color-pastel-pink) ${pctA}%,
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
