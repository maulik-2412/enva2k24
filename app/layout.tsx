import type { Metadata } from "next";
import { Quattrocento } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import mandala from "@/assets/images/mandalatest.png";

const inter = Quattrocento({
  weight: "700",
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "ENVA 2024",
  description:
    "The official website of Enva2k24 - annual cultural festival of Maharaja Surajmal Institute of Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="w-screen h-screen fixed object-contain overflow-hidden opacity-25 mandala flex justify-center items-center top-0">
          <Image
            src={mandala}
            alt="Mandala Center"
            className="sm:w-[60%] animate-spin animate-duration-[15000ms] align-middle"
          />
        </div>
        <div className="rootdiv"></div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}