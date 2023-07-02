
import BottomNavbar from "app/componnets/BottomNavbar";
import Cards from "app/componnets/Card";
import DropDown2 from "app/componnets/DropDown2";
import Footer from "app/componnets/Footer";
import MapLocation from "app/componnets/MapLocation";
import Navbar from "app/componnets/Navbar";
import Pricing from "app/componnets/Pricing";
import Slider from "app/componnets/Slider";
import Stats from "app/componnets/Stats";
import Topnavbar from "app/componnets/Topnavbar";
import Head from "next/head";
import { useState } from "react";
import "../app/styles/globals.css";
export default function Home() {
  const [isOpen,setOpen] = useState(false)
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
      <MapLocation/>
      <Footer />
    </div>
  );
}
