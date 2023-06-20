
import BottomNavbar from "app/componnets/BottomNavbar";
import Cards from "app/componnets/Card";
import Footer from "app/componnets/Footer";
import Navbar from "app/componnets/Navbar";
import Pricing from "app/componnets/Pricing";
import Slider from "app/componnets/Slider";
import Stats from "app/componnets/Stats";
import Topnavbar from "app/componnets/Topnavbar";
import Head from "next/head";
import "../app/styles/globals.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Topnavbar />
      <Navbar />
      <BottomNavbar/>
      <Slider />
      <Pricing />
      <Stats />
      <Cards />
      <Footer />
    </div>
  );
}
