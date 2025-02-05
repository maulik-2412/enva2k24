"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaMapLocationDot } from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import image1 from "@/assets/images/caraousel/preview (1).jpeg";
import localFont from 'next/font/local';

const heavitas = localFont({src:'../../fonts/Heavitas.ttf'});
const submarine =localFont({src:'../../fonts/SUBMARINE.otf'});

export default function Home() {
  return (
    <div className="w-full pt-5 md:p-5 flex flex-col gap-4">
      <div className="w-full flex justify-center gap-4 flex-wrap animate-fade-down animate-duration-[1500ms] mt-16">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-sm shadow-[#7e7947] shadow-2xl carousel"
        >
          <CarouselContent>
            <CarouselItem>
              <Image src={image1} alt="CaraouselImage" />
            </CarouselItem>
            <CarouselItem>
              <Image src={image1} alt="CaraouselImage" />
            </CarouselItem>
            <CarouselItem>
              <Image src={image1} alt="CaraouselImage" />
            </CarouselItem>
            <CarouselItem>
              <Image src={image1} alt="CaraouselImage" />
            </CarouselItem>
            <CarouselItem>
              <Image src={image1} alt="CaraouselImage" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <span className="hidden sm:flex sm:gap-4 sm:justify-start">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-sm shadow-[#7e7947] shadow-2xl carousel"
          >
            <CarouselContent>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-sm shadow-[#7e7947] shadow-2xl carousel"
          >
            <CarouselContent>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
              <CarouselItem>
                <Image src={image1} alt="CaraouselImage" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </span>
      </div>
      <div className="animate-fade-down animate-duration-[1500ms] animation-delay-[1500ms] text-center sm:mt-8 mt-5 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 about-container">
        <div className={heavitas.className}>
        <h1 className="text-xl sm:text-3xl font-bold mt-24 lg:my-4  lg:pt-16">ABOUT THE EVENT</h1>
        </div>
        <p className="text-justify text-base md:px-16 px-20 pb-20 lg:px-32 lg:pb-28 text-red-900 sm:text-lg">
          ENVA, the annual college Fest, organised by Prakriti MSIT is a
          fun-packed, frolicsome event which is a 2-day-long event held in
          April. The fest not only sees involvement of students, but also
          teachers, showcasing wholesome senior-junior interaction. With a
          plethora of exciting events, enjoyable activities and amazing prizes
          to be won, it ensures everlasting fun..
        </p>
        </div>
        <div className="w-full lg:w-1/2 where-container">
        <div className={heavitas.className}>
        <h1 className="text-xl sm:text-3xl font-bold mt-24 lg:my-4  lg:pt-16">WHERE</h1>
        </div>
        <p className="text-lg text-center lg:px-16 md:pb-32 px-10 pb-20 hover:text-red-600 text-red-900">
          <a
            href="https://maps.app.goo.gl/SND9jemHnvSaixRh8"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <span className="inline-block">
              <FaMapLocationDot />
            </span>{" "}
            Maharaja Surajmal Institute Of Technology, New Delhi
          </a>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3026434125327!2d77.08987957500791!3d28.620690284619222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1706030988039!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </p>
        </div>
      </div>
    </div>
  );

}