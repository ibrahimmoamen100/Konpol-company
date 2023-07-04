import { animated, useSpring, useTrail } from "@react-spring/web";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiLinkAlt, BiSearch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import {
  datasheets,
  markets,
  materials,
  products,
  resources,
} from "../data/Data";
import "../styles/globals.css";

import { useMeasure } from "react-use";
import DropDown from "./DropDown";
export default function SmallDrop() {



  let myspring = useSpring({
    from: { y: -50, opacity: 0.2 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <animated.div className="bg-gray-100 w-screen h-screen z-10 border-2  border-gray-200 absolute flex flex-col items-center justify-start gap-8 lg:hidden "  style={myspring}>
      <div className="mx-auto container gap-8  flex flex-col justify-between">
      <button className="flex border-2 justify-center p-4  items-center gap-2  px-2  ">
          Search
          <input
            type="text"
            placeholder='Search...'
            className=" p-2 bg-transparent border-2 outline-none flex"
          />
          <BiSearch className="text-lg" />
        </button>
        <ul className="flex flex-col gap-4">
          <Link href='about'
            className="p-2 text-gray-600  flex justify-between items-center border-2  gap-1 font-medium  font-righteous cursor-pointer"
          >
            Material <BiLinkAlt />
          </Link>
          <Link href='about'
            className="p-2 text-gray-600  flex justify-between border-2  items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Products <BiLinkAlt />{" "}
          </Link>
          <Link href='about'
            className="p-2 text-gray-600  flex justify-between border-2 items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Markets <BiLinkAlt />{" "}
          </Link>
          <Link href='about'
            className="p-2 text-gray-600  flex justify-between border-2 items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Datasheets <BiLinkAlt />{" "}
          </Link>
          <Link href='about'
            className="p-2 text-gray-600  flex justify-between border-2 items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Resources <BiLinkAlt />
          </Link>
          <Link href='about'
            className="p-2 text-gray-600  flex justify-between border-2 items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            New & Events <BiLinkAlt />{" "}
          </Link>
          <Link href='about' className="p-2 text-gray-600  flex justify-between border-2 items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            About Us <BiLinkAlt />{" "}
          </Link>
        </ul>
      </div>
      <div className="flex justify-end items-end gap-4">
            <button className="border-2 text-main border-main p-3 flex justify-center items-center gap-2">
              Our Locations <GiEarthAmerica />
            </button>
            <button className="border-2 border-secondMain text-secondMain p-3 flex justify-center items-center gap-2">
              Contact Us <BsArrowRight />
            </button>
          </div>
    </animated.div>
  );
}
