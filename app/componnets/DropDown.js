import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import React from "react";
const DropDown = ({ data }) => {
  let spring = useSpring({
    from: { y: -30, opacity: 0.1 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <animated.div
      style={spring}
      className="z-10 bg-white w-screen absolute  top-12 left-0 border-2 border-gray-200 "
    >
      <div className="container m-auto flex flex-wrap flex-col justify-center items-start w-full">
        <Link
          href="/products"
          className="font-medium text-secondMain p-2 border-b-2 border-gray-300 flex-1 w-full"
        >
          See All Products
        </Link>

        <ul className="flex flex-wrap flex-row w-full gap-x-16 justify-start ">
          {data.map((e) => (
            <Link
              key={Math.random()}
              className="p-2 border-b-2 border-gray-200 basis-1/5 flex justify-start items-center"
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
