import Head from "next/head";
import Navbar from "../app/componnets/navbar";
import "../app/styles/globals.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className="container">hello from home</div>
    </div>
  );
}
