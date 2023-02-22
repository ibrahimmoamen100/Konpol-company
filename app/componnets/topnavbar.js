import Link from "next/link";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiTwotonePhone,
} from "react-icons/ai";

function topnavbar() {
  return (
    <div className="bg-slate-500">
      <div className="container mx-auto flex flex-auto">
        {/* Phone Icon and label */}
        <div className="flex flex-row justify-center items-center">
          <span className="text-white px-2 "> +975464984684</span>
          <AiTwotonePhone className="text-white text-xl" />
        </div>
        <ul className="flex flex-row gap-2 w-full justify-end">
          <li className="flex justify-center items-center">
            <Link href="">
              <AiFillFacebook className="text-2xl text-white" />
            </Link>
          </li>
          <li>
            <Link href="" className="text-2xl text-white">
              <AiFillTwitterSquare />
            </Link>
          </li>
          <li className="">
            <Link href="" className="text-2xl text-white">
              <AiFillLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default topnavbar;
