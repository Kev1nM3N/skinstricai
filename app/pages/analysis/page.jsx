"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MyLoader from "@/app/components/MyLoader";

export default function Analysis() {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [demographics, setDemographics] = useState(null);
  const [showPermissionBox, setShowPermissionBox] = useState(false);
  const router = useRouter();

  const handleImageClick = (type) => {
      if (type === "camera") {
      setShowPermissionBox(true);
    } else {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result.split(",")[1];
      setLoading(true);

      try {
        const response = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64 }),
        });

        const data = await response.json();
        setDemographics(data.data);

        localStorage.setItem("demographics", JSON.stringify(data.data));

        setTimeout(() => {
          router.push("/pages/results");
        }, 1000);
      } catch (err) {
        console.error("Upload error:", err);
        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };


  if (loading) return <MyLoader />;

  return (
    <section className="flex flex-col justify-center items-center relative w-full">
      <Link href="/pages/datafield" className="absolute -bottom-40 left-15 sm:-bottom-80 flex items-center space-x-2 cursor-pointer group transition">
        <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
          <span className="-rotate-45">◀</span>
        </div>
        <span className="pl-2 group-hover:translate-x-3 duration-300">BACK</span>
      </Link>

      <h1 className="absolute -top-65 left-12 sm:-top-90 font-semibold">TO START ANALYSIS</h1>

      <div className="flex flex-col sm:flex-row justify-evenly w-full">
        {[{ src: "camera.png", alt: "camera" }, { src: "gallery.png", alt: "gallery" }].map((icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <figure className="relative w-[320px] lg:w-[450px] p-8">
              <Image
                src="/images/full rectangle.png"
                alt="border"
                width={450}
                height={450}
                className="w-full rectangleBorder"
              />
              <Image
                src={`/images/${icon.src}`}
                alt={icon.alt}
                width={126}
                height={126}
                className="absolute top-[6rem] left-[6rem] lg:top-[10rem] lg:left-[10rem] cursor-pointer hover:scale-104 transition duration-200"
                onClick={() => handleImageClick(icon.alt)}
              />
              <p className="font-normal text-sm leading-6 absolute bottom-10 left-20 lg:hidden">
                {icon.alt === "camera" ? "Allow A.I to scan your face" : "Allow A.I to access gallery"}
              </p>
              {icon.alt === "camera" ? (
                <Image
                  src="/images/scanface.png"
                  alt="text graphic"
                  width={200}
                  height={80}
                  className="hidden lg:block absolute top-[125px] left-[16.4rem]"
                />
              ) : (
                <Image
                  src="/images/accessgallery.png"
                  alt="text graphic"
                  width={200}
                  height={80}
                  className="hidden lg:block absolute bottom-[96px] right-[16.2rem]"
                />
              )}
            </figure>
          </div>
        ))}
      </div>

      {showPermissionBox && (
        <div className="w-full absolute top-23 z-50 sm:top-20 sm:-left-24 lg:top-42 ">
          <div className="bg-[#1A1B1C] pt-4 pb-2 shadow-lg w-[360px] mx-auto">
            <h2 className="text-[#FCFCFC] font-semibold mb-12 leading-[24px] px-6">
              ALLOW A.I. TO ACCESS YOUR CAMERA
            </h2>
            <div className="flex mt-4 border-t border-[#FCFCFC] pt-2">
              <button
                onClick={() => setShowPermissionBox(false)}
                className="pr-8 translate-x-45 text-[#fcfcfca1] font-normal text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-500"
              >
                DENY
              </button>
              <button
                onClick={() => router.push("/pages/camera")}
                className="pr-5 translate-x-45 text-[#FCFCFC] font-semibold text-sm leading-4 tracking-tight cursor-pointer hover:text-gray-300"
              >
                ALLOW
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HIDDEN FILE INPUT */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </section>
  );
}
