import Head from "next/head";
import Cards from "../componnets/Card";
import Navbar from "../componnets/Navbar";
import Pricing from "../componnets/Pricing";
import Slider from "../componnets/Slider";
import Stats from "../componnets/Stats";
import Topnavbar from "../componnets/topnavbar";
import "../styles/globals.css";
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
      <div className="container">hello from Home Page</div>
    </div>
  );
}
