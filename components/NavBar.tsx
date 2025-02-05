"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import logo from "@/assets/images/praklogo.png";
const menus = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Events", path: "/events" },
  { title: "Sponsors", path: "/sponsors" },
];

export default function Navbar() {
  const [state, setState] = React.useState(false);
  return (
    <nav className="w-full">
      <div className="items-center px-4 max-w-screen-xl ml-auto md:flex md:px-8  md:justify-end transition-all transition-duration-2000 ease-in">
        <div className="absolute left-0 top-0 p-2">
          <Link href="/">
            <h1 className="font-bold">
              <Image src={logo} alt="Enva Logo" width={60} height={60} />
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-end py-3 md:py-5 md:block gap-6">
          <div className="md:hidden">
            <button
              className="text-white outline-none p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              {state ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </button>
          </div>
        </div>
        <div
          className={`w-full flex justify-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block backdrop-blur-sm" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="text-[#89070D] hover:text-white text-xl transition-colors transition-duration-2000 ease-in"
                onClick={() => setState(!state)}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}