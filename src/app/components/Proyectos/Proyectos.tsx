"use client";

import React, { MutableRefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";

import Proyecto from "../Proyecto/Proyecto";
import useIntersectionObserver from "../../hooks/IntersectionObserver";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Merriweather } from "next/font/google";
import { Montserrat } from "next/font/google";
import { toast } from "../toast/use-toast";
import Particles from "../magicui/particles";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const proyectos = [
  {
    titulo: "Scroll Animations",
    titulo2: "Artics Headphones",
    puesto: "Proyecto personal",
    desc: "Animacion con Scroll hecha con React Three Fiber, GSAP y Next.js",
    tecnologias: [
      "/proyectos/react.png",
      "/proyectos/three.png",
      "/proyectos/next.webp",
    ],
    links: ["", "", ""],
    video: "/videos/ArticsAnimation.mp4",
  },
  {
    titulo: "Green Plus",
    puesto: "Design Lead - Programador Frontend",
    desc: "Servicio de compensación de huella de carbono",
    tecnologias: [
      "/proyectos/react.png",
      "/proyectos/three.png",
      "/proyectos/next.webp",
    ],
    links: ["", "", ""],
    video: "/videos/greenplus.mp4",
  },
  {
    titulo: "Tokenizer",
    puesto: "Programador Frontend Freelance",
    desc: "Landing page de digitalización de certificados",
    tecnologias: [
      "/proyectos/react.png",
      "/proyectos/three.png",
      "/proyectos/next.webp",
    ],
    links: ["", "", ""],
    video: "/videos/tokenizer.mp4",
  },
];

function Proyectos() {
  const [primeraAparicion, setPrimeraAparicion] = useState(false);
  const [targetRef, isIntersecting] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
  };

  useEffect(() => {
    if (isIntersecting) {
      if (!primeraAparicion) {
        toast({
          title: "Los objetos son 3D",
          description: "Puedes interactuar con ellos arrastrando el click.",
        });
        setPrimeraAparicion(true);
      }
    }
  }, [isIntersecting]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8 }}
      animate={{ scale: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black h-auto min-h-screen w-[85vw] flex flex-col justify-start items-start text-white rounded-t-[60px] gap-24 scale-90 p-12"
    >
      <Particles quantity={150} className="w-screen h-screen absolute left-0 z-0" />
      <h2
        ref={targetRef as MutableRefObject<HTMLDivElement | null>}
        className={`text-6xl font-bold w-full text-center ${montserrat.className}`}
      >
        Nuestros Proyectos
      </h2>
      <Slider
        {...sliderSettings}
        className={`w-full h-[75vh] ${montserrat.className}`}
      >
        {proyectos.map((item, index) => (
          <div key={item.titulo} className="flex justify-center items-center">
            <Proyecto
              titulo={item.titulo}
              titulo2={item.titulo2}
              puesto={item.puesto}
              desc={item.desc}
              tecnologias={item.tecnologias}
              links={item.links}
              video={item.video}
              index={index}
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}

export default Proyectos;
