import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import React, { useState } from "react";
import { useMeasure } from "react-use";

const DropDown = ({ data }) => {
  let myspring = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <animated.div
      style={myspring}
      className="z-9 bg-white w-screen absolute flex flex-wrap flex-col justify-center items-start top-10 left-0 border-t-2 border-gray-200"
    >
      <div className="container m-auto">
        <Link
          href="/products"
          className="font-medium text-secondMain flex p-2  border-b-2 border-gray-200"
        >
          {" "}
          See All Products
        </Link>

        <ul className="flex justify-start gap-x-16 flex-row h-auto pt-2 flex-wrap ">
          {data.map((e) => (
            <Link
              key={Math.random()}
              className="flex-5 py-2 border-b-2 border-gray-200 basis-56"
              href={e.link}
            >
              {e.name}
            </Link>
          ))}
        </ul>
      </div>
    </animated.div>
  );
};

export default DropDown;
