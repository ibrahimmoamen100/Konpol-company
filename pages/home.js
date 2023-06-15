import Cards from "app/componnets/Card";
import Pricing from "app/componnets/Pricing";
import Stats from "app/componnets/Stats";
import Slider from "app/componnets/slider";
import Topnavbar from "app/componnets/topnavbar";
import Head from "next/head";
import Footer from "../app/componnets/Footer";
import Navbar from "../app/componnets/Navbar";

import "../app/styles/globals.css";
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
      <Footer />
    </div>
  );
}
