import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
<<<<<<< HEAD
import { BsArrowRight } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

=======
>>>>>>> 93ccb0be0060c7cc267c2a36904d7b1b60f44483
import logo from "../../public/image/konpol transparent logo.png";

function Navbar(props) {
  return (
<<<<<<< HEAD
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
=======
    <div className="navbar bg-base-100 container m-auto">
      <div className="flex-1">
        <Image src={logo} alt="this logo image" className="w-16 lg:w-20" />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
>>>>>>> 93ccb0be0060c7cc267c2a36904d7b1b60f44483
        </div>
      </div>
    </div>
  );
}

export default Navbar;
<Image src={logo} alt="this logo image" className="w-16 lg:w-20" />;
