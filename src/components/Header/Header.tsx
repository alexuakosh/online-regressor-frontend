"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { logoProps } from "./Logo/Logo";
// * Components:
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Logo from "./Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";

// * ===============================================

type headerProps = {
  addClassName?: string;
  logoText?: logoProps["text"];
  logoWidth?: logoProps["imgWidth"];
  logoHeight?: logoProps["imgHeight"];
};

const defaultHeaderProps = {
  className: ``,
  options: [
    ["Home", "/"],
    [
      "Advisory",
      [
        ["Financial analysis", "/finance"],
        ["Investment analysis", "/investment"],
        ["OSINT", "/osint"],
        ["Budgeting", "/budgeting"],
      ],
    ],
    [
      "IT & BI Services",
      [
        ["Business Intelligence tools integration", "/business-intelligence"],
        ["Data Analysis & Machine learning", "/data-analysis"],
        ["Data Engineering", "/data-engineering"],
        ["Web app development", "/web-development"],
      ],
    ],
    // ["Online-Regressor", "/online-regressor"],
    ["Contacts", "/contacts"],
  ],
  optionsTablet: [
    [
      "Advisory",
      [
        ["Financial analysis", "/finance"],
        ["Investment analysis", "/investment"],
        ["OSINT", "/osint"],
        ["Budgeting", "/budgeting"],
      ],
    ],
    [
      "IT & BI Services",
      [
        ["Business Intelligence tools integration", "/business-intelligence"],
        ["Data Analysis & Machine learning", "/data-analysis"],
        ["Data Engineering", "/data-engineering"],
        ["Web app development", "/web-development"],
      ],
    ],
    // ["Online-Regressor", "/online-regressor"],
    ["Contacts", "/contacts"],
  ],
};

export default function Header({
  addClassName = "",
  logoText,
  logoWidth,
  logoHeight,
}: headerProps) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    console.log('hell yeah!')
  }, [])



  return (
    <header
      className={twMerge(
        addClassName,
        `bg-gradient-to-r from-[--main-color] to-[--grad-color] relative`
      )}
    >
      {" "}
      <div
        className={`header__content__container flex justify-between 2xl:w-3/4 m-auto items-center `}
      >
        <Logo
          addClassName="m-2"
          text={logoText}
          imgWidth={logoWidth}
          imgHeight={logoHeight}
        />
        <Hamburger setSwitcher={setOpenNav} switcher={openNav} />
        <NavigationMenu
          setOpen={setOpenNav}
          open={openNav}
          addClassName={`mb-[--header-nav-bot] lg:mr-8 2xl:mr-0 sm:hidden lg:block`}
          options={defaultHeaderProps.options}
        />
        <NavigationMenu
          setOpen={setOpenNav}
          open={openNav}
          addClassName={`hidden mb-[0.5rem] sm:block lg:hidden mr-4`}
          options={defaultHeaderProps.optionsTablet}
        />
      </div>
    </header>
  );
}