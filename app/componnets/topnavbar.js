import Link from "next/link";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiTwotonePhone,
} from "react-icons/ai";

function topnavbar() {
  return (
    <div className="bg-red-400">
      <div className="container mx-auto flex flex-auto">
        {/* Phone Icon and label */}
        <div className="flex flex-row justify-center items-center text-[#00154e] hover:text-blue-700 cursor-pointer">
          <span className=" px-2 text-inherit"> +975464984684</span>
          <AiTwotonePhone className=" text-xl" />
        </div>
        <ul className="flex flex-row gap-2 w-full justify-end">
          <li className="flex justify-center items-center">
            <Link href="">
              <AiFillFacebook className="text-2xl text-[#00154e]  hover:text-blue-700" />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-2xl text-[#00154e]  hover:text-blue-700"
            >
              <AiFillTwitterSquare />
            </Link>
          </li>
          <li className="">
            <Link
              href=""
              className="text-2xl text-[#00154e]  hover:text-blue-700"
            >
              <AiFillLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default topnavbar;
