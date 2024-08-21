import React from "react";
import Image from "next/image";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Vortex } from "../ui/vortex";

interface Word {
  text: string;
  className?: string;
}

function Inicio() {
  const words: Word[] = [
    {
      text: "Transformando",
    },
    {
      text: "ideas",
    },
    {
      text: "en",
    },
    {
      text: "piezas",
    },
    {
      text: "digitales",
    },
    {
      text: "únicas.",
      className: "text-blue-500 opacity-100",
    },
  ];


  return (
    <Vortex>
      <div className="w-screen h-screen flex flex-col items-center">
        <div
          className="h-28 w-full max-w-[90vw] flex flex-row items-center justify-between z-[10000]"
        >
          <div>
            <Image src={"/logo.png"} alt={""} width={50} height={50} />
          </div>
          <div className="flex flex-row gap-10">
            <p className="text-white font-medium hover:underline cursor-pointer hover:text-slate-200 transition-all duration-300 origin-left">
              Descargar CV
            </p>
            <p className="text-white font-medium hover:underline cursor-pointer hover:text-slate-200 transition-all duration-300 origin-left">
              LinkedIn
            </p>
          </div>
        </div>
        <div
          className="w-auto h-full flex justify-center items-center flex-col gap-10 z-[10000]"
        >
          <p className="text-gray-300 font-bold text-5xl">
            &#123; <b className="text-4xl font-semibold">Santiago Iannello</b> &#125;
          </p>
          <div>
            <TypewriterEffect words={words} />
          </div>
          <p className="text-gray-300 font-medium text-2xl">
            No seguimos formulas, creamos soluciones
          </p>
          <button className="bg-transparent flex justify-center items-center border-2 border-white rounded-full px-4 py-2 text-white font-medium cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
            Hablemos de tu idea
          </button>
        </div>
      </div>
    </Vortex>
  );
}

export default Inicio;
