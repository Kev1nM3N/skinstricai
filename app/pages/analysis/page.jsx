"use client";
import React from "react";
import Link from "next/link";

export default function Analysis() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center">
      {/* Back Button */}
      {/* <Link href="/" className="absolute -bottom-70 left-15 flex items-center space-x-2 cursor-pointer group transition">
        <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
          <span className="-rotate-45">◀</span>
        </div>
        <span className="pl-2 group-hover:translate-x-3 duration-300">BACK</span>
      </Link> */}

      {/* Top Left Label */}
      {/* <h1 className="absolute -top-110 left-12 font-semibold">TO START ANALYSIS</h1> */}

      {/* Centered Icon Options */}
      <div className="flex flex-col">
        {/* Camera Option sm:flex sm:w-full justify-evenly */}
        <div className="relative text-center">
          <figure className="mx-auto mb-8 transition group">
            <img src="/images/camera.png" alt="camera" className="w-36 h-36 object-contain mx-auto group-hover:scale-105 duration-800 cursor-pointer" />
          </figure>
        </div>

        {/* Gallery Option */}
        <div className="relative text-center">
          <figure className="mx-auto mb-2 transition group">
            <img src="/images/gallery.png" alt="gallery" className="w-36 h-36 object-contain mx-auto group-hover:scale-105 duration-800 cursor-pointer" />
          </figure>
        </div>
      </div>
    </section>
  );
}
