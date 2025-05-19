"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Results() {
  const [hovered, isHovered] = useState(false);

  return (
    <section>
      <Link
        href="/pages/analysis"
        className="absolute bottom-40 left-15 flex items-center space-x-2 cursor-pointer group transition"
      >
        <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
          <span className="-rotate-45">◀</span>
        </div>
        <span className="pl-2 group-hover:translate-x-3 duration-300">
          BACK
        </span>
      </Link>

      <div className="absolute top-0 left-8 text-left mt-5">
        <h1 className="text-base font-semibold leading-[24px] tracking-tight">
          A.I. ANALYSIS
        </h1>
        <p className="text-sm mt-1 text-muted-foreground uppercase leading-[24px]">
          A.I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          src="/images/full rectangle.png"
          alt="border"
          className={`absolute w-[600px] transition duration-250 ${hovered ? "opacity-100" : "opacity-0"}`}
        />
        <div className="relative w-[350px] h-[350px] flex items-center justify-center">
          {/* FOUR DIAMONDS */}
          <div className="flex flex-wrap gap-1 rotate-45 pl-7">
            <div className="relative w-[150px] h-[150px] ">
              <Link href="/pages/summary">
                <div onMouseEnter={() => isHovered(true)} onMouseLeave={() => isHovered(false)} 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-300">
                  <span className="text-center text-sm -rotate-45 pointer-events-none font-bold">
                    DEMOGRAPHICS
                  </span>
                </div>
              </Link>
            </div>
            <div className="relative w-[150px] h-[150px]">
              <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed bg-gray-100 hover:bg-gray-300">
                <span className="text-center text-sm -rotate-45 font-bold">
                  COSMETIC CONCERNS
                </span>
              </div>
            </div>
            <div className="relative w-[150px] h-[150px]">
              <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed bg-gray-100 hover:bg-gray-300">
                <span className="text-center text-sm -rotate-45 font-bold">
                  SKIN TYPE DETAILS
                </span>
              </div>
            </div>
            <div className="relative w-[150px] h-[150px]">
              <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed bg-gray-100 hover:bg-gray-300">
                <span className="text-center text-sm -rotate-45 font-bold">
                  WEATHER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}