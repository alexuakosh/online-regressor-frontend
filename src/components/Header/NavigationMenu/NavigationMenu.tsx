"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import getLinkBranch from "@/lib/getLinkBranch";
import getLinkOptionPairs from "@/lib/getLinksOptionsPairs";
import getOptionByLink from "@/lib/getOptionByLink";

type TypeOfInput = string | (string | string[])[] | TypeOfInput[] | any;

export default function NavigationMenu({
  options,
  addClassName,
  open,
  setOpen,
}: {
  options: TypeOfInput[];
  addClassName?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const activeRoute = usePathname();
  const [linkOptionsPairs, setLinkOptionsPairs] = useState(
    getLinkOptionPairs(options)
  );
  const [activeOptions, setActiveOptions] = useState(
    getLinkBranch(getOptionByLink(linkOptionsPairs, activeRoute), options)
  );
  const [topActiveOption, setTopActiveOption] = useState(null);
  function updateActiveOptions(routePath: string) {
    const regEx = /[a-z\-\/]+$/gi;
    const endPoint = routePath.match(regEx)?.[0] ?? " ";
    const endOption = getOptionByLink(linkOptionsPairs, endPoint);
    if (activeOptions.at(-1) !== endOption) {
      let arr = getLinkBranch(endOption, options);
      setActiveOptions((prev) => [...arr]);
      return;
    }
    return;
  }
  function setOptions(input: TypeOfInput, i = 0) {
    if (
      Array.isArray(input) &&
      typeof input[0] === "string" &&
      typeof input[1] === "string"
    ) {
      return (
        <li
          key={input[0] + i.toString()}
          className={twMerge(
            `option [&:hover>span]:text-[--secondary-font-color]`
          )}
        >
          <span className="block">
            <Link
              className={twMerge(
                `option-text block w-full hover:text-[--secondary-font-color] text-white ${
                  activeRoute === input[1]
                    ? "text-[--secondary-font-color]"
                    : ""
                }`
              )}
              onClick={(e) => [setOpen(false), setTopActiveOption(null)]} // !!! ---------------------------------------------- 🎃
              href={`${input[1]}`}
            >
              {input[0]}
            </Link>
          </span>
        </li>
      );
    } else {
      return (
        <li
          onMouseEnter={() => setTopActiveOption(input[0])}
          onMouseLeave={() => setTopActiveOption(null)}
          onClick={() =>
            topActiveOption === input[0]
              ? setTopActiveOption(null)
              : setTopActiveOption(input[0])
          }
          key={input[0] + i.toString()}
          className={`option [&:hover_svg]:fill-[--secondary-font-color] ${
            input[0] === topActiveOption
              ? "[&_svg]:rotate-180"
              : "[&_ul]:h-0 [&_svg]:rotate-0"
          } `}
        >
          <span
            className={twMerge(
              `flex items-center text-white option-text ${
                activeOptions.includes(input[0])
                  ? "text-[--secondary-font-color]"
                  : ""
              } `
            )}
          >
            {input[0]}
            <svg
              className={twMerge(
                `ml-1 sm:hidden transition-transform duration-200 ${
                  activeOptions.includes(input[0])
                    ? "fill-[--secondary-font-color]"
                    : ""
                }`
              )}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#FFF"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
          <ul className={"sub-level-menu0"}>{input[1].map(setOptions)}</ul>
          <div className={`joint absolute w-full`}></div>
        </li>
      );
    }
  }

  useEffect(() => {
    updateActiveOptions(activeRoute);
  }, [activeRoute]);
  const menu = (
    <nav
      className={twMerge(
        `header-nav transition-all absolute left-[-100%] ${
          open ? "left-0" : "left-[-100%]"
        } top-[102%] sm:self-end sm:whitespace-nowrap w-full max-w-xs sm:max-w-none sm:w-fit`,
        // sm:
        "sm:block sm:translate-x-0 sm:static",
        // option-text:
        " [&_span]:font-bold [&_span]:tracking-wider sm:[&_span]:tracking-normal lg:[&_span]:tracking-wider",
        addClassName
      )}
    >
      <div
        onClick={(e) => [setOpen(false), setTopActiveOption(null)]}
        className="fixed bg-transparent w-full h-full sm:hidden"
      ></div>
      <ul
        className={twMerge(
          // top-level-menu:
          "top-level-menu column sm:row sm:gap-4 md:gap-6 text-center bg-[--mid-color] sm:bg-transparent relative",
          /// / top-level-menu option mob:
          "[&>li>span]:text-2xl [&>li]:text-left [&>li]:border-b-2 [&:hoevr>li>span>svg]:hidden",

          /// / top-level-menu option:
          "sm:[&>li>span]:text-base md:[&>li>span]:text-xl sm:[&>li]:border-none sm:[&>li]:text-center sm:[&>li]:relative ",
          "sm:[&>li:hover>ul]:mt-3 sm:[&>li:hover>ul]:right-1/2 sm:[&>li:hover>ul]:translate-x-1/2 sm:[&>li:hover>.joint]:h-4",
          /// / / top-level-menu option:last-child:hover sm:
          "sm:[&>li:last-child:hover>ul]:translate-x-0 sm:[&>li:last-child:hover>ul]:right-0 sm:[&>li:last-child:hover>ul>li]:text-right",
          /// / / top-level-menu option:last-child:hover 2xl:
          " 2xl:[&>li:last-child:hover>ul>li]:2xl:text-center 2xl:[&>li:last-child:hover>ul]:2xl:right-1/2 2xl:[&>li:last-child:hover>ul]:translate-x-1/2",
          // sub-level-menu:
          "sm:[&_ul>li>span]:text-[--main-font-color] [&_ul]:font-medium [&_ul]:overflow-hidden",
          // / sub-level-menu sm:
          "sm:[&_ul]:absolute",
          // option:
          "[&_li]:cursor-pointer",
          /// / effects on option:hover:
          "[&_li:hover>span]:text-[--secondary-font-color] ",
          // option-text:
          "[&>li>span]:transition-colors [&>li>span]:",
          // option-text::after:
          "sm:[&>li::after]:content-[''] sm:[&>li::after]:block sm:[&>li::after]:h-[3px] sm:[&>li::after]:absolute sm:[&>li::after]:w-0 sm:[&>li::after]:bottom-[-0.5rem] sm:[&>li::after]:bg-[--secondary-font-color] sm:[&>li::after]:transition-width sm:[&>li:hover::after]:w-full",
          // sub-level-menu:
          "sm:[&_ul]:bg-[--mid-color] [&_ul]:rounded",
          // sub-level-menu>option:
          "[&>li_li:not(:last-child)]:border-b-2 [&>li_li>a]:block",
          // sub-level-menu_menu:
          "sm:[&>li>ul_ul]:right-full sm:[&>li>ul_ul]:pr-2 [&_ul_.option-text]:pl-12 [&_ul_.option-text]:py-4 [&>li>span>.option-text]:p-4 [&>li>.option-text]:p-4 sm:[&>li>span>.option-text]:p-0 sm:[&>li>.option-text]:p-0 sm:[&_ul_.option-text]:p-4",
          // :
          ``
        )}
      >
        {options.map(setOptions)}
      </ul>
    </nav>
  );
  return menu;
}
