import React, { Suspense } from "react";
import Scene from "../Scene/Scene";
import Image from "next/image";
import CustomButtonRow from "../CustomButtonRow/CustomButtonRow";

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
  const buttons = [
    {
      iconPath: "/proyectos/web.png",
      text: "Visitar Web",
      link: ""
    },
    {
      iconPath: "/proyectos/video.png",
      text: "Ver en video",
      link: ""
    },
    {
      iconPath: "/proyectos/github.png",
      text: "GitHub",
      link: ""
    }
  ]
  return (
    <div id="seccion" className={`w-full px-12 flex justify-between`}>
      <div className="w-1/2 h-full flex flex-col items-start justify-center gap-10 text-start pt-28">
        <div className="flex flex-col items-start justify-center gap-3">
          <p className="text-[44px] font-bold text-white">
            {titulo}
            <br />
            {titulo2}
          </p>
          <p
            className={`${
              puesto ? "block" : "hidden"
            } text-blue-500 text-base font-semibold w-full text-start`}
          >
            {puesto}
          </p>
          <p className="text-gray-500 text-lg font-semibold text-start italic">
            {desc}
          </p>
        </div>
        <div className="w-full h-auto flex justify-start">
          <div className="w-4/5 h-auto flex flex-row justify-center gap-6 p-2 rounded-xl items-center bg-white/15">
            {tecnologias.map((tecnologia) => (
              <Image
                key={tecnologia}
                src={tecnologia}
                alt={""}
                height={20}
                width={20}
                className=""
              />
            ))}
          </div>
        </div>
        <div className="w-4/5 h-auto flex flex-row items-end gap-4 justify-start">
          {/* <p className="font-medium text-white whitespace-nowrap">Ver mas: </p> */}
            <div className="w-full h-full flex flex-row items-center gap-6 justify-center">
              {buttons.map((item) => (
                <CustomButtonRow iconPath={item.iconPath} text={item.text} link={item.link} />
              ))}
            </div>
        </div>
      </div>
      <div className="w-1/2 h-auto">
        <Suspense fallback={null}>
          <Scene video={video} />
        </Suspense>
      </div>
    </div>
  );
}

export default Proyecto;
