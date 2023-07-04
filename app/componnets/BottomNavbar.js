import React, { useEffect, useRef, useState } from "react";
import { BiDownArrowAlt, BiSearch } from "react-icons/bi";
import { useMeasure } from "react-use";
import {
  datasheets,
  markets,
  materials,
  products,
  resources,
} from "../data/Data";
import "../styles/globals.css";
import DropDown from "./DropDown";
export default function BottomNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (dropdownName) => {
    console.log(dropdownName);
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName
    );
  };
  const [ref, bounds] = useMeasure();
  return (
    <div
      className="bg-white w-100  z-10 border-2 border-gray-200 relative hidden lg:block"
      ref={ref}
    >
      <div className="mx-auto container flex justify-between">
        <ul className="flex gap-4">
          <li
            onClick={() => handleToggle("material")}
            className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            Material <BiDownArrowAlt />
            {openDropdown === "material" && <DropDown data={materials} />}
          </li>
          <li
            onClick={() => handleToggle("products")}
            className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Products <BiDownArrowAlt />{" "}
            {openDropdown === "products" && <DropDown data={products} />}
          </li>
          <li
            onClick={() => handleToggle("markets")}
            className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Markets <BiDownArrowAlt />{" "}
            {openDropdown === "markets" && <DropDown data={markets} />}
          </li>
          <li
            onClick={() => handleToggle("datasheets")}
            className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Datasheets <BiDownArrowAlt />{" "}
            {openDropdown === "datasheets" && <DropDown data={datasheets} />}
          </li>
          <li
            onClick={() => handleToggle("resources")}
            className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Resources <BiDownArrowAlt />
            {openDropdown === "resources" && <DropDown data={resources} />}
          </li>
          <li
            onClick={() => handleToggle("events")}
            className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer"
          >
            {" "}
            Events <BiDownArrowAlt />{" "}
            {openDropdown === "events" && <DropDown data={resources} />}
          </li>
          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            About Us <BiDownArrowAlt />{" "}
          </li>
        </ul>
        <button className="hidden lg:flex border-2 justify-center  items-center gap-2  px-2  ">
          <BiSearch className="text-lg" />
          {bounds.width >= 1500 ? "Search Bar" : "Search"}
          <input
            type="text"
            placeholder={bounds.width >= 1500 ? "Type here" : ""}
            className="hidden py-0.5 border-none outline-none xl:flex"
          />
        </button>
      </div>
    </div>
  );
}
