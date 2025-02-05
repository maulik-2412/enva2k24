import { MdOutlineDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import localFont from "next/font/local";
import Image from "next/image";
import logo from "@/assets/images/envalogo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";
const heavitas = localFont({ src: "../fonts/Heavitas.ttf" });
const submarine = localFont({ src: "../fonts/SUBMARINE.otf" });

export default function Home() {
  return (
    <section className="animate-fade-down animate-duration-[1500ms] h-[90vh] overflow-hidden z-50">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="sm:ml-9">
          <div className={heavitas.className}>
            <div className="p-2 flex justify-center w-full">
              <Image
                src={logo}
                alt="Enva Logo"
                className="sm:w-1/2 h-auto text-center"
              />
            </div>
          </div>

          <div
            className={`${heavitas.className} text-center w-full font-normal text-lg p-2 text-[#ffffff] sm:text-2xl`}
          >
            <div className="Date">
              <span className="inline-block">
                <MdOutlineDateRange />
              </span>{" "}
              JANUARY 31st- FEBRUARY 1st
            </div>
            <div className="Date">
              <span className="inline-block">
                <FaLocationDot />
              </span>{" "}
              Maharaja Surajmal Institute of Technology
            </div>
            <div className="mt-10">
              <Button
                variant={"secondary"}
                className="text-xl bg-[#89070D] text-white rounded-xl hover:text-white hover:bg-[#AE4234] w-fit transition-colors transition-duration-1000 ease-in-out"
              >
                <Link href="/events">
                  Explore Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}