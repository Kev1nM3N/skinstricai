"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Analysis() {
  return (
    <section className="relative h-[55vh] sm:h-full">
      <div className="flex h-full flex-col justify-evenly sm:flex-row">
        <div className="relative text-center">
          <figure className="relative w-52 h-52 sm:w-90 mx-auto group transition">
            <Image
              src="/images/full rectangle.png"
              alt="rectangular border"
              fill
              className="z-0 object-contain Ben"
              sizes="(max-width: 840px) 100vw, 600px"
            />

            {/* Foreground camera icon */}
            <img
              src="/images/camera.png"
              alt="camera"
              className="relative z-10 object-contain group-hover:scale-105 duration-800 cursor-pointer"
            />
          </figure>
        </div>

        <div className="relative text-center">
          <figure className="mx-auto transition group">
            <img
              src="/images/gallery.png"
              alt="gallery"
              className="w-30 h-30 object-contain mx-auto group-hover:scale-105 duration-800 cursor-pointer"
            />
          </figure>
          <Image
            src="/images/full rectangle.png"
            width={250}
            height={250}
            alt="rectangular border"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
