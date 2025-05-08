"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Analysis() {
  return (
    <section className="flex justify-center items-center">

      <Link href="/" className="absolute bottom-25 left-15 flex items-center space-x-2 cursor-pointer group transition">
        <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
          <span className="-rotate-45">◀</span>
        </div>
        <span className="pl-2 group-hover:translate-x-3 duration-300">BACK</span>
      </Link>

      <h1 className="absolute top-3 left-12 font-semibold">TO START ANALYSIS</h1>

      <div className="flex flex-col sm:flex-row justify-evenly w-full">
        <div className="flex justify-center items-center">
          <figure className="relative w-[320px] lg:w-[450px] p-8">
            <Image
              src="/images/full rectangle.png"
              alt="border"
              width={450}
              height={450}
              className="w-full rectangleBorder"
            />

            <Image
              src="/images/camera.png"
              alt="camera"
              width={126}
              height={126}
              className="absolute top-[6rem] left-[6rem] lg:top-[10rem] lg:left-[10rem] cursor-pointer hover:scale-104 transition duration-200"
            />

            <p className="font-normal text-sm leading-6 absolute bottom-10 left-20 lg:hidden">
              Allow A.I <br /> to scan your face
            </p>

            <Image
              src="/images/scanface.png"
              alt="text graphic. Allow A.I to scan your face."
              width={200}
              height={80}
              className="hidden lg:block absolute top-[125px] left-[16.4rem]"
            />
          </figure>
        </div>

        <div className="flex justify-center items-center">
          <figure className="relative w-[320px] lg:w-[450px] p-8">
            <Image
              src="/images/full rectangle.png"
              alt="border"
              width={450}
              height={450}
              className="w-full rectangleBorder"
            />

            <Image
              src="/images/gallery.png"
              alt="gallery"
              width={126}
              height={126}
              className="absolute top-[6rem] left-[6rem] lg:top-[10rem] lg:left-[10rem] cursor-pointer hover:scale-104 transition duration-200"
            />

            <p className="font-normal text-sm leading-6 absolute bottom-10 left-20 lg:hidden">
              Allow A.I <br /> to access gallery
            </p>

            <Image
              src="/images/accessgallery.png"
              alt="text graphic. Allow A.I. to access your gallery"
              width={200}
              height={80}
              className="hidden lg:block absolute bottom-[96px] right-[16.2rem]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
