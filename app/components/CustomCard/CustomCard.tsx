"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    subsets: ["latin"],
});


interface CustomCardProps {
    text: string;
}

export function CustomCard() {
    const [hovered, setHovered] = React.useState(false);

    const copyToClipboard = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Texto copiado al portapapeles!');
            })
            .catch((err) => {
                console.error('Error al copiar el texto: ', err);
            });
    };

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
        >
            <div className='h-72 w-full bg-gradient-to-b from-black via-transparent to-transparent absolute top-0 z-10'></div>
            <p className="group-hover:hidden group-hover:opacity-0 opacity-100 md:text-2xl text-2xl font-semibold text-center text-white relative z-20 max-w-2xl mx-auto transition-all duration-300">
                ¿Todo listo para comenzar? Hablemos
            </p>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: hovered ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                }} className="w-full h-full hidden group-hover:flex flex-col items-center text-white z-10 transition-all duration-300"
            >
                <div className="h-full w-full flex flex-col justify-center items-center gap-8">
                    <p className={`py-1 w-full text-center text-5xl font-bold ${merriweather.className}`}>
                        Hablemos
                    </p>
                    <p className="text-xl font-semibold italic text-gray-300 w-2/5 text-center">Si queres conversar sobre algo o simplemente decir hola, estaré encantado de responder</p>
                    <div className="w-full h-10 flex flex-row items-center justify-center gap-5 cursor-pointer">
                        <Link href={"mailto:santiagoiannellot@gmail.com"} className="bg-white/20 h-full flex justify-center rounded-xl w-72 items-center font-medium text-white hover:bg-blue-500/50 transition-all duration-300">
                            <p className="">santiagoiannellot@gmail.com</p> 
                        </Link>
                        <div onClick={() => {copyToClipboard('santiagoiannellot@gmail.com')}} className="h-10 w-12 flex justify-center items-center bg-white/20 rounded-xl hover:bg-blue-500/50 transition-all duration-300">
                            <Image src={"/contacto/copy2.png"} alt={""} height={16} width={16} className="" />
                        </div>
                    </div>
                    <p className="font-semibold">Ó</p>
                    <div className="w-full flex justify-center items-center gap-10">
                        <Image src={"/contacto/whatsapp.png"} alt={""} height={40} width={40} className="w-auto h-auto object-cover hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer" />
                        <Image src={"/contacto/linkedin.png"} alt={""} height={40} width={40} className="w-auto h-auto object-cover hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer" />
                        <Image src={"/contacto/github.png"} alt={""} height={40} width={40} className="w-auto h-auto object-cover hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer" />
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </div>
    );
}
