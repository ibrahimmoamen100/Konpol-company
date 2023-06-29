"use client";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import logo from "../../public/image/konpol transparent logo.png";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const spring = useSpring({
    transform: toggle ? "rotate(45deg)" : "rotate(0deg)",
    opacity: toggle ? 0 : 1,
  });

  const handleClick = () => {
    setToggle((prev) => !prev);
    console.log(spring.opacity);
  };
  return (
    <div className="navbar bg-base-100 container m-auto w-full">
      <div className="flex mr-5">
        <Link href="home" passHref>
          <Image src={logo} alt="this logo image" className="w-16 lg:w-28" />
        </Link>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex">
          <span className="font-bold  text-gray-500 text-lg">
            Sloution Provider
          </span>
        </div>
        <div className="  justify-end items-end gap-4 hidden lg:flex">
          <button className="border-2 text-main border-main p-3 flex justify-center items-center gap-2">
            Our Locations <GiEarthAmerica />
          </button>
          <button className="border-2 border-secondMain text-secondMain p-3 flex justify-center items-center gap-2">
            Contact Us <BsArrowRight />
          </button>
        </div>
        <div
          className="flex gap-2  bg-red flex-col w-8 h-10  cursor-pointer justify-center items-center"
          onClick={handleClick}
        >
          <animated.div
            className="bg-black w-full h-[2px]"
            style={spring.transform}
          ></animated.div>
          <animated.div
            className="bg-black w-full h-[2px]"
            style={spring.opacity}
          ></animated.div>
          <animated.div
            className="bg-black w-full h-[2px]"
            style={spring.transform}
          ></animated.div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
