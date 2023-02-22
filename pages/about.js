import Head from "next/head";
import Navbar from "../app/componnets/navbar";
import Topnavbar from "app/componnets/topnavbar";
import "../app/styles/globals.css";
import Slider from "app/componnets/slider";
export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Topnavbar />
      <Navbar />
      {/* <Slider /> */}
      <div className="container">
        <h1 className="text-6xl">hello from asdasdad</h1>
      </div>
    </div>
  );
}
