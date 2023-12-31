import styles from "./header.module.css";
import { Fugaz_One } from "next/font/google";
import { Ysabeau } from "next/font/google";

const fugaz = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

const ysabeau = Ysabeau({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.nameWrapper}>
          <p className={fugaz.className}>DATARMINISM</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <p className={ysabeau.className}>Online Regressor</p>
          </div>
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Free Medical icons</title>
            <rect x="3" y="40" width="28" height="6" fill="#9F11EA" />
            <path
              d="M43,48H4a2,2,0,0,1,0-4H43A2,2,0,0,1,43,48Z"
              fill="#FFFFFF"
            />
            <path
              d="M24.92,30.47a4,4,0,0,1-2.77-1.12L16.38,23.8a4,4,0,0,1-.11-5.66L30.84,3A6,6,0,0,1,35,1.17h0.12a6,6,0,0,1,4.16,1.68l2.88,2.77a6,6,0,0,1,.16,8.48L27.8,29.24A4,4,0,0,1,24.92,30.47Zm0-4h0L39.49,11.33a2,2,0,0,0-.05-2.83L36.55,5.73a1.86,1.86,0,0,0-1.42-.56,2,2,0,0,0-1.4.61L19.16,20.92Z"
              fill="#FFFFFF"
            />
            <path
              d="M19.89,34.78a2,2,0,0,1-1.39-.56l-6.85-6.59a2,2,0,0,1,2.77-2.88l6.85,6.59A2,2,0,0,1,19.89,34.78Z"
              fill="#FFFFFF"
            />
            <path
              d="M20,48V44A13,13,0,0,0,33,31a12.88,12.88,0,0,0-2.6-7.8l3.2-2.4A17,17,0,0,1,20,48Z"
              fill="#FFFFFF"
            />
            <path
              d="M37.2,47.8l-2.58-3.05a18,18,0,0,0,1.47-26.1L39,15.9A22,22,0,0,1,37.2,47.8Z"
              fill="#FFFFFF"
            />
            <rect width="48" height="48" fill="none" />
          </svg>
        </div>
      </div>
    </header>
  );
}
