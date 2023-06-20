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
      {/* <Slider /> */}
      <div className="container">
      </div>
    </div>
  );
}
