"use client";

// import Inicio from "./components/Inicio/Inicio";
// import Proyectos from "./components/Proyectos/Proyectos";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import Image from "next/image";
import Particles from "./components/magicui/particles";
import dynamic from "next/dynamic";

const Inicio = dynamic(() => import("./components/Inicio/Inicio"));
const Proyectos = dynamic(() => import("./components/Proyectos/Proyectos"));

export default function Home() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Simula una carga
  //   setTimeout(() => setLoading(false), 4000);
  // }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen absolute flex flex-col justify-center items-center bg-black text-white overflow-hidden">
          <Particles quantity={100} className="w-screen h-screen absolute z-0" />
          <div className="w-[90vw] h-screen flex justify-start items-start absolute mt-12">
            <Image
              src={"/logo.png"}
              alt={""}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <Spinner />
        </div>
      ) : (
        <>
          <main className="main min-h-screen w-screen flex flex-col items-center gap-20 bg-black">
            <Inicio />
            <Proyectos />
            {/* <Como /> */}
            {/* <Carrusel /> */}
          </main>
        </>
      )}
    </>
  );
}
