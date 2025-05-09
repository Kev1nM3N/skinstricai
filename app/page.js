"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [hovered, isHovered] = useState(false);
  const headingStyles = "text-[clamp(2.5rem,10vw,8rem)] text-center leading-tight font-light tracking-tighter transition-all";

  return (
    <main className="">
      <div className="flex justify-between items-center">
        <div className={`relative transition-all duration-300 ${hovered ? "opacity-0" : ""}`}>
          <Image
            src="/images/Rectangle 2779.png"
            width={300}
            height={400}
            alt="pointing right border"
            className="hidden lg:block"
          />
          <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:flex items-center space-x-2 text-[clamp(0.65rem,2vw,1rem)] david">
            <button className="border rotate-45 w-10 h-10 flex items-center justify-center cursor-no-drop">
              <span className="block -rotate-287">◀</span>
            </button>
            <span className="pl-3 lucas">DISCOVER A.I.</span>
          </div>
        </div>

        <div className="flex flex-col items-center relative">
          <h1 className={`${headingStyles} ${hovered ? "-translate-x-[20rem] duration-600" : ""}`}>Sophisticated<br /></h1>
          <h1 className={`${headingStyles} ${hovered ? "-translate-x-[28rem] duration-700" : ""}`}>skincare</h1>
          <p className="lg:hidden w-[30ch] my-4 text-[14px] font-semibold text-center text-[#1a1b1c83]">
            Skinstric developed an A.I. that creates a highly-personalized
            routine tailored to what your skin needs.
          </p>
          <div className="flex justify-between w-[9rem] lg:hidden hover:scale-105 duration-300">
            <Link href="/pages/datafield">
              <button className="relative flex items-center gap-4">
                <span className="text-[12px] font-bold cursor-pointer">
                  ENTER EXPERIENCE
                </span>
              </button>
            </Link>
            <div className="w-6 h-6 border rotate-45 flex items-center justify-center">
              <span className="-rotate-45">▶</span>
            </div>
          </div>
        </div>

        <figure className="absolute top-95 w-full lg:hidden -z-1">
          <img src="/images/full rectangle.png" alt="border" className="w-[430px] h-[430px] mx-auto" />
        </figure>
        
        <div className="relative">
          <Image
            src="/images/Rectangle 2778.png"
            width={300}
            height={400}
            alt="pointing left square border"
            className="hidden lg:block"
          />
          <div
            className="absolute top-1/2 left-12 -translate-y-1/2 hidden lg:flex items-center space-x-2 text-[clamp(0.65rem,2vw,1rem)] group"
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
          >
            <span className="pr-3 transition-transform duration-300 group-hover:-translate-x-[25px]">
              TAKE TEST
            </span>
            <Link href="/pages/datafield">
              <button className="border rotate-45 w-10 h-10 group-hover:w-12 group-hover:h-12 duration-300 flex items-center justify-center cursor-pointer">
                <span className="-block -rotate-287">▶</span>
              </button>
            </Link>
          </div>
        </div>

      </div>
      <span className="absolute bottom-16 left-16 text-[clamp(0.85rem,2vw,1rem)] leading-snug hidden lg:block">
        SKINSTRIC DEVELOPED AN A.I. THAT CREATES <br />
        A HIGHLY-PERSONALISED ROUTINE TAILORED TO <br />
        WHAT YOUR SKIN NEEDS.
      </span>
    </main>
  );
}
