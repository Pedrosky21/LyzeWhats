import Image from "next/image";
import UploadBar from "./components/uploadBar";
import InfoModalButton from "./components/InfoModalButton";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white">
      <nav className="flex items-center justify-between p-4 md:px-8 shrink-0">
        <h2 className="text-3xl md:text-4xl text-teal-dark">LyzeWhats</h2>
        <InfoModalButton />
      </nav>
      <div className="flex flex-col md:flex-row w-full flex-grow min-h-0">
        <div className="flex flex-col space-y-3 md:space-y-4 w-full md:w-1/2 p-6 md:pt-10 justify-center h-full overflow-y-auto md:overflow-hidden">
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-teal-dark font-divertida2 leading-tight">
            Hacé que tus chats cobren vida
          </h2>
          <p className="w-full text-lg md:text-xl lg:text-2xl text-teal-light mt-2 md:mt-4">
            Un análisis hecho con amor, para que puedas revivir lo que realmente
            importa.
          </p>
          <div className="my-2 md:my-4 shrink-0">
            <UploadBar />
          </div>
          <p className="w-full text-base md:text-lg lg:text-xl text-teal-light leading-snug">
            Descubrí qué palabras los unen, qué gestos se repiten y qué momentos
            hacen que su historia valga la pena. Porque detrás de cada mensaje y
            cada emoji escondido siempre hay algo más para contar.
          </p>
          <div className="flex items-start md:items-center mt-4 md:mt-6 space-x-2 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 flex-shrink-0 mt-0.5 md:mt-0 text-teal-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p className="text-xs md:text-sm lg:text-base text-teal-light leading-tight">
              Tus chats no se guardan, se procesan de forma segura
              respetando tu privacidad.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:items-end w-full md:w-1/2 p-6 md:p-0 h-[40vh] md:h-full shrink-0 md:shrink">
          <div className="relative flex justify-center items-center md:items-end w-full h-full md:pb-8">
            <Image
              src="/love-stats.png"
              alt="hearts"
              width={500}
              height={600}
              className="object-contain w-auto h-full max-h-[90%] md:max-h-[85vh] mix-blend-multiply"
              priority
            />
            <div className="absolute bg-teal-dark bottom-0 md:bottom-8 left-1/2 md:left-[10%] -translate-x-1/2 md:translate-x-0 w-[85%] sm:w-[320px] rounded-lg px-4 py-4 md:py-6 shadow-xl">
              <div className="flex items-baseline bg-white h-full rounded-lg p-3 md:p-4">
                <div className="flex items-baseline-last h-full space-x-6 sm:space-x-10 border-b w-full justify-center">
                  <div className="w-6 sm:w-8 md:w-10 h-20 md:h-32 bg-teal-dark rounded-t-lg"></div>
                  <div className="w-6 sm:w-8 md:w-10 h-14 md:h-20 bg-teal-dark rounded-t-lg"></div>
                  <div className="w-6 sm:w-8 md:w-10 h-8 md:h-10 bg-teal-dark rounded-t-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
