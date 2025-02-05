import React from "react";
import "./sponsor.css";
import logo from "@/assets/images/envalogo.png";
import Image from "next/image";
import { Icons } from "@/assets/icons/icons";
const Sponsor: React.FC = () => {
  return (
    <div className="animate-fade-down animate-duration-[1500ms] animation-delay-[1500ms] flex flex-col h-screen bg-center bg-cover bg-no-repeat text-center">
      <div className="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600  bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
        <div className="p-2 flex justify-center w-full">
          <Image
            src={logo}
            alt="Enva Logo"
            className="sm:w-1/2 h-auto text-center"
          />
        </div>

        <h1 className="z-50 text-4xl font-extrabold uppercase text-white transition duration-500">
          Coming Soon
        </h1>
        <h2 className="text-xl text-gray-700 transition duration-500 text-left">
          We are almost there to introduce our{" "} new
          <span className="font-bold text-red-600"> Sponsors</span> , in the
          meantime, you can follow us on social networks to get the latest
          updates.
        </h2>
        <div className="w-full flex items-center justify-center sm:gap-10 gap-4">
          {Icons.map((icon, index) => (
            <a
              href={icon.link}
              key={index}
              className="tracking-wide font-bold rounded border-2 border-red-400 hover:text-white hover:bg-red-600 shadow-md py-2 px-6 transition duration-500 z-50 items-center"
            >
              <span className="mx-auto">{icon.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;