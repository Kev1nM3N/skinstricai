"use client";
import React from "react";
import Link from "next/link";

export default function Analysis() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center">
      {/* Back Button */}
      <Link href="/" className="absolute -bottom-80 left-15 flex items-center space-x-2 cursor-pointer group transition">
        <div className="w-8 h-8 border rotate-45 flex items-center justify-center">
          <span className="-rotate-45">◀</span>
        </div>
        <span className="pl-2 group-hover:translate-x-3 duration-300">BACK</span>
      </Link>

      {/* Top Left Label */}
      <h1 className="absolute -top-105 left-12 font-semibold">TO START ANALYSIS</h1>

      {/* Centered Icon Options */}
      <div className="w-full flex justify-evenly">
        {/* Camera Option */}
        <div className="relative text-center mx-8">
          <div className="border-dotted border p-4 rounded-full mx-auto mb-2">
            <img src="/images/camera.png" alt="camera" className="w-36 h-36 object-contain mx-auto" />
          </div>
        </div>

        {/* Gallery Option */}
        <div className="relative text-center mx-8">
          <div className="border-dotted border p-4 rounded-full mx-auto mb-2">
            <img src="/images/gallery.png" alt="gallery" className="w-36 h-36 object-contain mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
