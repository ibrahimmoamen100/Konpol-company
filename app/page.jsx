import Image from "next/image";
import { Inter } from "@next/font/google";
import logo from "../public/image/My project.png";
import Countdown from "./componnets/countdown";
import styles from "./styles/page.module.css";
import "./styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <main className={styles.main}>
      <Image
        src={logo}
        alt="logo company"
        className="object-cover w-2/4 sm:inset-64"
      />
      <div className={styles.entire_container}>
        <h1 className={styles.header}>WELCOME TO KONPOL COMPANY</h1>
        <h2 className={styles.header2}>Website is under Design</h2>
        <Countdown />
        <p className={styles.p_catalog}>
          Check More About Us by Download our Catalog in the button Down below
        </p>
        <button className="p-3 bg-blue-800 flex flex-col justify-center items-center text-white font-mono font-bold">
          <a
            href="https://drive.google.com/file/d/1JQwy0tlURPNYMH7M5O2WTR1k0rdiUE0X/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Download Catalog
          </a>
        </button>
      </div>
    </main>
  );
}
