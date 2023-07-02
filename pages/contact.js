
import BottomNavbar from "app/componnets/BottomNavbar";
import Cards from "app/componnets/Card";
import Footer from "app/componnets/Footer";
import MapLocation from "app/componnets/MapLocation";
import Navbar from "app/componnets/Navbar";
import Pricing from "app/componnets/Pricing";
import Slider from "app/componnets/Slider";
import Stats from "app/componnets/Stats";
import Topnavbar from "app/componnets/Topnavbar";
import Head from "next/head";
import "../app/styles/globals.css";
export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Topnavbar />
      <Navbar />
      <BottomNavbar/>
<div><h1>Contact</h1></div>
      <Footer />
    </div>
  );
}
