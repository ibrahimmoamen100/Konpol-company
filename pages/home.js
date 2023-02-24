import Head from "next/head";
import Navbar from "../app/componnets/navbar";
import Topnavbar from "app/componnets/topnavbar";
import "../app/styles/globals.css";
import Slider from "app/componnets/slider";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Topnavbar />
      <Navbar />
      <Slider />
      <div className="container">hello from </div>
    </div>
  );
}
