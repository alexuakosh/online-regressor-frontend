import { twMerge } from "tailwind-merge";
import Image from "next/image";
import img from "../../public/error-404-red-sign_25276032.png"

export default function NotFound() {
  return (
    <section className={twMerge(`not-found`)}>
      <div className={twMerge(`content-container mt-[30%]`)}>
       
        <div className={twMerge(`m-auto`)}>
          <Image
            className={twMerge(`m-auto`)}
            src={img}
            alt="not found"
            width={400}
            height={400}
          />
        </div>
        {/* <h2 className={twMerge(`text-[3rem] fond-bold text-center block`)}>
          @$(404)#!)&*...
        </h2>  */
        // eslint-disable-next-line react/no-unescaped-entities
        <h2>It's ok, don't worry! Just use correct route:)</h2>}
      </div>
    </section>
  );
}
