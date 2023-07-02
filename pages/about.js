import BottomNavbar from "app/componnets/BottomNavbar";
import Footer from "app/componnets/Footer";
import Slider from "app/componnets/Slider";
import Topnavbar from "app/componnets/Topnavbar";
import Head from "next/head";
import Navbar from "../app/componnets/Navbar";
import "../app/styles/globals.css";


export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Topnavbar />
      <Navbar />
      <BottomNavbar/>
      {/* <Slider /> */}
      <div className="container">
      
      <h1>this About</h1>
      </div>
      <Footer/>
    </div>
  );
}
