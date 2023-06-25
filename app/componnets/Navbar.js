import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

import { useMeasure } from "react-use";
import logo from "../../public/image/konpol transparent logo.png";
import SmallDrop from "./SmallDrop";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { line1, line2, line3 } = useSpring({
    line1: isOpen
      ? "rotate(45deg) translate(2px, 2px)"
      : "rotate(0deg) translate(0px, 0px)",
    line2: isOpen ? 0 : 1,
    line3: isOpen
      ? "rotate(-45deg) translate(9px, -11px)"
      : "rotate(0deg) translate(0px, 0px)",
    config: { duration: 200 },
  });

  const [refSolution, boundsSolution] = useMeasure();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relaitve">
      <div className=" navbar bg-base-100 container m-auto w-full">
        <div className="flex mr-5">
          <Link href="home">
            <Image src={logo} alt="this logo image" className="w-16 lg:w-28" />
          </Link>
        </div>
        {/* This Humberger Menu  */}
        <div className="flex flex-row justify-end w-full gap-20">
          <div className="hidden sm:flex self-center">
            <span className="font-bold  text-gray-500 text-lg">
              Solution Provider
            </span>
          </div>
          <div
            onClick={handleClick}
            className="lg:hidden flex flex-col justify-between h-5 w-6 cursor-pointer items-end"
          >
            <animated.div
              style={{ transform: line1 }}
              className="line bg-gray-600 w-full h-[2px]"
            />
            <animated.div
              style={{ opacity: line2 }}
              className="line bg-gray-600 w-full h-[2px]"
            />
            <animated.div
              style={{ transform: line3 }}
              className="line bg-gray-600 w-full h-[2px]"
            />
          </div>
          <div className="hidden lg:flex justify-end items-end gap-4">
            <button className="border-2 text-main border-main p-3 flex justify-center items-center gap-2">
              Our Locations <GiEarthAmerica />
            </button>
            <button className="border-2 border-secondMain text-secondMain p-3 flex justify-center items-center gap-2">
              Contact Us <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
      {isOpen && <SmallDrop />}
    </div>
  );
}

export default Navbar;
