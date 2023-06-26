import Link from "next/link";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiTwotonePhone,
} from "react-icons/ai";

function Topnavbar() {
  return (
    <div className="bg-secondMain">
      <div className="container mx-auto flex flex-auto">
        {/* Phone Icon and label */}
        <div className="flex flex-row justify-center items-center text-[#00154e] hover:text-blue-700 cursor-pointer">
          <span className=" px-2 text-white  hover:text-gray"> +975464984684</span>
          <AiTwotonePhone className=" text-xl  text-white  hover:text-gray-100" />
        </div>
        <ul className="flex flex-row gap-2 w-full justify-end">
          <li className="flex justify-center items-center">
          <Link href="" className="text-2xl text-main  hover:text-blue-700">
              <AiFillFacebook className="text-3xl text-white  hover:text-gray" />
            </Link>
          </li>
          <li>
            <Link href="" className="text-2xl text-main  hover:text-blue-700">
              <AiFillTwitterSquare className="text-3xl text-white  hover:text-gray"/>
            </Link>
          </li>
          <li className="">
          <Link href="" className="text-2xl text-main  hover:text-blue-700">
              <AiFillLinkedin className="text-3xl text-white  hover:text-gray"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topnavbar;
