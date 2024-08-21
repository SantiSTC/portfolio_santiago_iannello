import React, { Suspense } from "react";
import Scene from "../Scene/Scene";
import Image from "next/image";

interface proyectoProps {
  titulo: string;
  titulo2?: string;
  puesto?: string;
  desc: string;
  tecnologias: string[];
  links: string[];
  video: string;
  index: number;
}

//      ${index % 2 == 0 ? "flex-row" : "flex-row-reverse gap-52"} `}

function Proyecto({
  titulo,
  titulo2,
  puesto,
  desc,
  tecnologias,
  links,
  video,
  index,
}: proyectoProps) {
  return (
    <div
      id="seccion"
      className={`w-full p-12 flex justify-between`}
    >
      <div className="w-1/2 h-full flex flex-col items-start justify-center gap-14 text-start pt-28">
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-5xl font-bold text-white">
            {titulo}
            <br />
            {titulo2}
          </p>
          <p
            className={`${
              puesto ? "block" : "hidden"
            } text-blue-500 text-lg font-semibold w-full text-start`}
          >
            {puesto}
          </p>
          <p className="text-gray-500 text-xl font-semibold text-start italic">
            {desc}
          </p>
        </div>
        <div className="w-full h-auto flex justify-center">
          <div className="w-auto h-auto flex flex-row justify-evenly gap-20 items-center">
            {tecnologias.map((tecnologia) => (
              <Image
                key={tecnologia}
                src={tecnologia}
                alt={""}
                height={30}
                width={30}
                className="w-auto h-auto object-cover"
              />
            ))}
          </div>
        </div>
        <div className="w-full h-auto flex flex-row items-center gap-12 justify-start">
          <button className="group relative w-44 h-12 overflow-hidden rounded-lg bg-blue-500 text-white text-lg font-medium shadow-xl transition-all duration-300 hover:shadow-2xl">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 transform group-hover:-translate-x-full bg-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 transform translate-x-full group-hover:translate-x-0 bg-white"></span>
            <span className="relative flex items-center justify-center transition-colors duration-300 group-hover:text-blue-500">
              <Image
                src="/proyectos/web.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-4 w-5 h-auto transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/proyectos/web2.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-4 w-5 h-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <span className="ml-8">Visitar web</span>
            </span>
          </button>

          <button className="group relative w-44 h-12 overflow-hidden rounded-lg bg-slate-200 text-blue-500 text-lg font-medium shadow-xl transition-all duration-300 hover:shadow-2xl">
            <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center justify-center transition-colors duration-300 group-hover:text-white">
              <Image
                src="/proyectos/video2.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-4 w-5 h-auto transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/proyectos/video.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-4 w-5 h-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <span className="ml-8">Ver en video</span>
            </span>
          </button>

          <button className="group relative w-44 h-[50px] overflow-hidden rounded-lg bg-[#0D1117] text-white text-lg font-medium shadow-xl transition-all duration-300 hover:shadow-2xl">
            <span className="absolute inset-0 w-full h-0 bg-white transition-all duration-300 ease-out group-hover:h-full"></span>
            <span className="relative flex items-center justify-center transition-colors duration-300 group-hover:text-black">
              <Image
                src="/proyectos/github.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-3 w-5 h-auto transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/proyectos/github2.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-3 w-5 h-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <span className="ml-7">GitHub</span>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full h-auto">
        <Suspense fallback={null}>
          <Scene video={video} />
        </Suspense>
      </div>
    </div>
  );
}

export default Proyecto;
