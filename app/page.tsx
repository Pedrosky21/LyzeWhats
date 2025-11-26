import Image from "next/image";
import UploadBar from "./components/uploadBar";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <h2 className="text-4xl text-teal-dark">LyzeWhats</h2>
        <div className="p-2 bg-teal-dark rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
      </nav>
      <div className="flex w-full">
        <div className="flex flex-col space-y-4 w-1/2 p-6">
          <h2 className="text-6xl text-teal-dark font-divertida2">
            Hacé que tus chats cobren vida
          </h2>
          <p className="w-5/6 text-2xl text-teal-light mt-6">
            Un análisis hecho con amor, para que puedas revivir lo que realmente
            importa.
          </p>
          <UploadBar />
          <p className="w-5/6 text-2xl text-teal-light">
            Descubrí qué palabras los unen, qué gestos se repiten y qué momentos
            hacen que su historia valga la pena. Porque detrás de cada mensaje y
            cada emoji escondido siempre hay algo más para contar.
          </p>
          <div className="flex items-center mt-8 space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p className="text-teal-light">
              Tus chats no se guardan, se procesan de forma segura
              respetando tu privacidad.
            </p>
          </div>
        </div>
        <div className="relative flex items-baseline w-1/2 overflow-hidden">
          <Image
            src="/love-stats.png"
            alt="hearts"
            width={500}
            height={600}
            className=""
          />
          <div className="absolute bg-teal-dark bottom-0 left-0 w-80 rounded-lg px-4 py-6 mb-2">
            <div className="flex items-baseline bg-white h-full rounded-lg p-4">
              <div className="flex items-baseline-last h-full space-x-10 border-b">
                <div className="w-10 h-32 bg-teal-dark rounded-t-lg"></div>
                <div className="w-10 h-20 bg-teal-dark rounded-t-lg"></div>
                <div className="w-10 h-10 bg-teal-dark rounded-t-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
