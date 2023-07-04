import BottomNavbar from "app/componnets/BottomNavbar";
import Footer from "app/componnets/Footer";
import Navbar from "app/componnets/Navbar";
import Topnavbar from "app/componnets/Topnavbar";
import Head from "next/head";
import React from "react";
import "../app/styles/globals.css";

function Search() {
  return (
    <div className="h-screen bg-red">
      <Head>
        <title>Search</title>
      </Head>
      <Topnavbar />
      <Navbar />
      <BottomNavbar />
      <div className="h-screen bg-gray-300">
        <input
          type="text"
          placeholder="What are you Looking For"
          className="p-4"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Search;
