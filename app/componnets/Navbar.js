import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

import logo from "../../public/image/konpol transparent logo.png";

function Navbar(props) {
  return (
    <div className="navbar bg-base-100 container m-auto w-full">
      <div className="flex mr-5">
        <Link href="home">
          <Image src={logo} alt="this logo image" className="w-16 lg:w-28" />
        </Link>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex">
          <span className="font-bold  text-gray-500 text-lg">
            Sloution Provider
          </span>
        </div>
        <div className=" flex justify-end items-end gap-4">
          <button className="border-2 text-main border-main p-3 flex justify-center items-center gap-2">
            Our Locations <GiEarthAmerica />
          </button>
          <button className="border-2 border-secondMain text-secondMain p-3 flex justify-center items-center gap-2">
            Contact Us <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
<Image src={logo} alt="this logo image" className="w-16 lg:w-20" />;
