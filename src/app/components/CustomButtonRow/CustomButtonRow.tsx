import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CustomButtonRowProps {
  iconPath: string;
  text: string;
  link: string;
}

function CustomButtonRow({ iconPath, text, link }: CustomButtonRowProps) {
  return (
    <Link href={link}>
      <div className="group w-auto h-auto flex flex-col lg:flex-row gap-1.5 items-center transition-all duration-300 cursor-pointer">
        <Image
          src={iconPath}
          alt={""}
          height={25}
          width={25}
          className="cursor-pointer filter group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:group-hover:scale-105 transition-all duration-300"
        />
        <p className="text-white text-base font-bold overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-[120px] mt-2 md:mt-0">
          <span className="whitespace-nowrap px-2">{text}</span>
        </p>
      </div>
    </Link>
  );
}

export default CustomButtonRow;