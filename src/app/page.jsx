import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "./componnets/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1>The Site is Under Creating</h1>
    </main>
  );
}
