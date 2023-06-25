import React, { useEffect, useState } from "react";
import { BiDownArrowAlt, BiSearch } from "react-icons/bi";
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

  return (
    <div className="bg-white w-100  border-2 border-gray-200 relative">
      <div className="container m-auto flex justify-between">
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
            New & Events <BiDownArrowAlt />{" "}
            {openDropdown === "events" && <DropDown data={resources} />}
          </li>
          <li className="p-2 text-gray-600  flex justify-center items-center gap-1 font-medium  font-righteous cursor-pointer">
            {" "}
            About Us <BiDownArrowAlt />{" "}
          </li>
        </ul>
        <button className="flex justify-center items-center gap-2   px-2 input ">
          Search
          <BiSearch className="text-lg" />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </button>
      </div>
    </div>
  );
}
