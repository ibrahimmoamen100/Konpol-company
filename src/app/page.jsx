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
      {/* <Image src={logo} alt="logo company" className={styles.logo_image} /> */}
      <div className={styles.entire_container}>
        <h1 className={styles.header}>WELCOME TO KONPOL COMPANY</h1>
        <h2 className={styles.header2}>WEBSITE IS UNDER CREATING</h2>
        <Countdown />
      </div>
    </main>
  );
}
