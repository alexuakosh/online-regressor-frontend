import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
//import diagram from "./diagram.png";
import logoPic from "../../../../public/logo.svg";
import dicePic from "../../../../public/dice.png";
import { Nunito } from "next/font/google";
// * ========================================================================

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

type logoProps = {
  addClassName?: string;
  text?: string;
  imgWidth?: number;
  imgHeight?: number;
};

const defaultLogoProps = {
  imgWidth: 50,
  imgHeight: 50,
};

const imageStyle = {
  background: 'black',
}

export default function Logo({
  addClassName,
  imgWidth = defaultLogoProps.imgWidth,
  imgHeight = defaultLogoProps.imgHeight,
  text,
}: logoProps) {
  return (
    <Link
      href={`/`}
      className={twMerge(
        `flex justify-between gap-6 sm:gap-1 lg:gap-6`,
        nunito.className,
        addClassName
      )}
    >
      <div className={`flex flex-col`}>
        <div className={`flex`}>
          <Image
            width={imgWidth * 2.7}
            height={imgHeight * 2.7}
            src={dicePic}
            style={imageStyle}
            alt="boost-forcing logo"
            priority
          />
          {text !== "" ? (
            <span className={`text-white font-bold text-xl flex option-text justify-center items-center text-[24px] ml-2`}>{text}</span>
          ) : null}
        </div>
        <div className={`flex justify-between`}>
          <span className={`text-white italic pt-[6px] mr-1`}>Data Determined Decisions</span>
          <Image
            width={imgWidth}
            height={imgHeight}
            src={logoPic}
            style={imageStyle}
            alt="boost-forcing logo"
            priority
          />
        </div>
      </div>



    </Link>
  );
}

export type { logoProps };
