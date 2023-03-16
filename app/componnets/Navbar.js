import * as React from "react";
import logo from "../../public/image/konpol transparent logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar(props) {
  return (
    <div className="bg-navColor">
      <div className="container m-auto flex justify-between items-center">
        <div className="logo">
          <Image src={logo} alt="this logo image" className="w-16 lg:w-20" />
        </div>
        <AiOutlineMenu className="text-3xl cursor-pointer lg:hidden text-main" />
        <ul className="hidden lg:flex justify-around items-center gap-4 text-main ">
          <li>
            <Link
              className=" hover:bg-slate-500 p-2 rounded hover:text-white transition-all delay-50 active:bg-gray-700"
              href=""
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className=" hover:bg-slate-500 p-2 rounded hover:text-white transition-all delay-50 active:bg-gray-700"
              href=""
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className=" hover:bg-slate-500 p-2 rounded hover:text-white transition-all delay-50 active:bg-gray-700"
              href=""
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
