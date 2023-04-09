import Head from "next/head";
import Navbar from "../app/componnets/Navbar";
import Topnavbar from "app/componnets/topnavbar";
import "../app/styles/globals.css";
import Slider from "app/componnets/slider";
import Pricing from "app/componnets/Pricing";
import Stats from "app/componnets/Stats";
import Cards from "app/componnets/Card";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Topnavbar />
      <Navbar />
      <Slider />
      <Pricing />
      <Stats />
      <Cards />
      <div className="container">hello from </div>
    </div>
  );
}
