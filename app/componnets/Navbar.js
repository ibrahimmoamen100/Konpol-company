import { animated, useSpring } from "@react-spring/web";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import logo from "../../public/image/konpol transparent logo.png";
import DropDown2 from "./DropDown2";
function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
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

  const { x } = useSpring({
    x: isOpen ? 0 : 1,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const navbarSpring = useSpring({
    position: isFixed ? "fixed" : "relative",
    top: isFixed ? 0 : null,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <animated.div
        style={navbarSpring}
        className={
          isFixed
            ? "top-[-100px]  bg-base-100 z-50 w-full flex flex-col justify-center items-center shadow-md shadow-slate-400"
            : " bg-base-100 z-50 w-full flex justify-center items-center "
        }
      >
        <div className="navbar bg-base-100 container m-auto w-full ">
          <div className="flex mr-5">
            <Link href="home" passHref>
              <CldImage
                width={isFixed ? 80 : 120}
                height={isFixed ? 80 : 120}
                border="1px_solid_skyblue"
                src="v1688261356/konpol_transparent_logo_lyk9ay.png"
                alt="this logo image"
              />
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
              className="flex lg:hidden gap-2  bg-red flex-col w-8 h-8  cursor-pointer justify-center items-center  "
              onClick={handleClick}
            >
              <animated.div
                className="bg-black w-full h-[2px]"
                style={{
                  transform: x.to({
                    range: [1, 0],
                    output: [
                      "rotate(0deg) translate(0px,0px)",
                      "rotate(45deg) translate(10px,5px)",
                    ],
                  }),
                }}
              ></animated.div>
              <animated.div
                className="bg-black w-full h-[2px]"
                style={{
                  opacity: x,
                }}
              ></animated.div>
              <animated.div
                className="bg-black w-full h-[2px]"
                style={{
                  transform: x.to({
                    range: [1, 0],
                    output: [
                      "rotate(0deg) translate(0px,0px)",
                      "rotate(-45deg) translate(7px,-5px)",
                    ],
                  }),
                }}
              ></animated.div>
            </div>
          </div>
        </div>
      </animated.div>
      <DropDown2 open={isOpen} />
    </>
  );
}

export default Navbar;
