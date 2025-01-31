import React from 'react'
import Link from "next/link";
import { twMerge } from 'tailwind-merge'
import Image from "next/image";
import logoPic from "../../../public/logo - Footer.svg";

const defaultFooterProps = {
  className: `footer-root`
}



export default function Footer({ addClassName = '' }) {
  return (
    <footer className={twMerge(defaultFooterProps.className, addClassName)}>
      <Link href={`/about`} className='italic ml-4 text-[--secondary-font-color]'>About Us</Link>
      <Link
        href={`/`}
        className='flex items-center'>
        <span className='text-lg font-bold text-[--secondary-font-color] mr-1'>DATARMINISM</span>
        <Image
          width={30}
          height={30}
          src={logoPic}
          alt="boost-forcing logo"
          priority
        />
      </Link>
      <Link href={`/terms`} className='italic text-[--secondary-font-color]'>Terms & Conditions</Link>
    </footer>
  )
}
