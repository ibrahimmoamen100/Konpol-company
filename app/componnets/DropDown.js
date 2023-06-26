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
      className="z-10 bg-white w-screen absolute flex flex-wrap flex-col justify-center items-start top-10 left-0 border-2 border-gray-700"
    >
      <div className="container m-auto">
        <Link href="/products" className="font-medium text-secondMain p-4">
          See All Products
        </Link>

        <ul className="flex justify-start h-auto p-2 flex-row gap-12  basis-2/5 ">
          {data.map((e) => (
            <Link
              key={Math.random()}
              className="p-2 border-b-2 border-gray-200 flex-1"
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
