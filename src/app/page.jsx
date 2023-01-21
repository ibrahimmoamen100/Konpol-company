import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import logo from "../../public/image/Konpol-logo.png";
import Countdown from "./componnets/countdown";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props);
  return (
    <main className={styles.main}>
      <div className={styles.entire_container}>
        <Image src={logo} alt="logo company" className={styles.logo_image} />
        <h1 className={styles.header}>WELCOME TO KONPOL COMPANY</h1>
        <h2 className={styles.header2}>WEBSITE IS UNDER CREATING</h2>
        <Countdown />
        <p className={styles.p_catalog}>
          Check More About Us by Download our Catalog in the button Down below
        </p>
        <button className={styles.download_catalog_btn}>
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
