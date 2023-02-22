import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import logo from "../../public/image/konpol transparent logo.png";
export default function navbar() {
  return (
    <div className="bg-white">
      <div className="container m-auto ">
        <div className="flex flex-auto justify-around items-center w-100">
          <div className="">
            <Image src={logo} className="w-20" alt="logo" />
          </div>
          <ul className="flex flex-row gap-4 justify-end items-center list-none flex-1">
            <li>
              <Link
                href="/home"
                className="text-blue-800 underline decoration-slate-800 decoration-10"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-800">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-800">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-800">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
