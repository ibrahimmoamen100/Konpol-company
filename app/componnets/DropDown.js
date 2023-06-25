import Link from "next/link";
import React from "react";

const DropDown = ({ data }) => {
  return (
    <div className="z-10 bg-white w-screen absolute flex flex-wrap flex-col justify-center items-start top-10 left-0 border-2 border-gray-700">
      <div className="container m-auto">
        <Link href="/products" className="font-medium text-secondMain p-2">
          {" "}
          See All Products
        </Link>

        <ul className="flex justify-start h-auto p-2">
          {data.map((e) => (
            <Link key={Math.random()} className="p-2 border-2" href={e.link}>
              {e.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
