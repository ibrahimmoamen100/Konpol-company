import { animated, useSpring } from "@react-spring/web";
import { useMeasure } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import { BiDownArrowAlt, BiSearch } from "react-icons/bi";

import "../styles/globals.css";
export default function DropDown2({ open }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    console.log(isFixed);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const navbarSpring = useSpring({
    position: open ? "fixed" : "absolute",
    top: open ? 85 : 120,
    config: { mass: 5, tension: 500, friction: 80 },
    opacity:open? 1: 0,
  });


  return (
    <animated.div
      style={navbarSpring}
      className={
        open
          ? "bg-white w-full  border-2 border-gray-200 h-full z-50  left-0 flex lg:hidden"
          : "bg-white w-full  border-2 border-gray-200 h-full z-50 top-100 left-0 hidden"
      }
    >
      <div className="container m-auto flex justify-between">
        <ul className="flex flex-col gap-4">
          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            Material <BiDownArrowAlt />
          </li>
          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            Products <BiDownArrowAlt />{" "}
          </li>
          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            Markets <BiDownArrowAlt />{" "}
          </li>
          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            Datasheets <BiDownArrowAlt />{" "}
          </li>
          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            Resources <BiDownArrowAlt />
          </li>

          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            About Us <BiDownArrowAlt />{" "}
          </li>
        </ul>
        <button className=" justify-center items-center gap-2 px-2 input hidden lg:flex">
          Search
          <BiSearch className="text-lg" />
        </button>
      </div>
    </animated.div>
  );
}
