"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MyLoader from "@/app/components/MyLoader";

export default function Camera() {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [photoTaken, setPhotoTaken] = useState(false);
  const router = useRouter();

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setPhotoTaken(true);
  };

  const handleProceed = async () => {
    setLoading(true);
    const base64 = capturedImage.split(",")[1];

    try {
      const response = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64 }),
      });

      const data = await response.json();
      localStorage.setItem("demographics", JSON.stringify(data.data));

      setTimeout(() => {
        router.push("/pages/results");
      }, 1000);
    } catch (err) {
      console.error("Camera upload error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    setCameraReady(true);
  }, 3000); // 3 seconds

  return () => clearTimeout(timer);
}, []);

  if (loading) return <MyLoader />;

  return (
    <section className="flex flex-col items-center justify-center">
      {!cameraReady ? (
        <div>
          <div className='w-full h-[50vh] relative flex items-center justify-center flex-col'>
            <div className="flex flex-col-reverse items-center">
              <h1 className='text-[16px] text-center font-semibold leading-tight'>SETTING UP CAMERA...</h1>
              <Image
                src="/images/camera.png"
                alt="text graphic"
                width={140}
                height={80}
                className=""
              />
            </div>
            <figure className='mx-8 absolute top-48 sm:top-30'>
                <Image
                    src="/images/full rectangle.png"
                    alt="border"
                    width={400}
                    height={400}
                    className="rectangleBorder mx-auto"
                />
            </figure>
          </div>
          <div className="relative bottom-32">
            <p className="text-[14px] my-4 text-center">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
            <div className="pl-10 sm:flex sm:pl-0">
              <div className="flex items-center mx-5">
                <img src="/images/diamond outline small.png" className="mx-1.5" alt="" />
                <p className="text-[14px]">NEUTRAL EXPRESSION</p>
              </div>
              <div className="flex items-center mx-5">
                <img src="/images/diamond outline small.png" className="mx-1.5" alt="" />
                <p className="text-[14px]">FRONTAL POSE</p>
              </div>
              <div className="flex items-center mx-5">
                <img src="/images/diamond outline small.png" className="mx-1.5" alt="" />
                <p className="text-[14px]">ADEQUATE LIGHTING</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="absolute w-full h-full object-cover"
        />
      )}

    {cameraReady && !photoTaken &&(
      <>
        <div className="absolute w-full h-full z-20">
          <div className="flex justify-end items-center mr-8 relative top-140">
            <p className="text-[14px] text-[var(--background)] font-semibold px-4">TAKE PICTURE</p>
            <button
              onClick={capturePhoto}
              className="rounded cursor-pointer hover:scale-110 transition duration-200"
            >
              <img src="/images/cameraIconLive.png" alt="" />
            </button>
          </div>

          {/* GUIDANCE DIV */}
          <div className="text-[var(--background)] relative top-240 z-100">
            <Link
              href="/pages/analysis"
              className="absolute bottom-24 sm:bottom-0 left-15 flex items-center space-x-2 cursor-pointer group transition z-20"
            >
              <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
                <span className="-rotate-45">◀</span>
              </div>
              <span className="pl-2 group-hover:translate-x-3 duration-300">
              BACK
            </span>
            </Link>
            <div>
              <p className="text-[14px] my-4 text-center">TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
              <div className="flex justify-center">
                <div className="flex items-center mx-5">
                  <img src="/images/Diamond White outline small.png" className="mx-1.5" alt="" />
                  <p className="text-[14px]">NEUTRAL EXPRESSION</p>
                </div>
                <div className="flex items-center mx-5">
                  <img src="/images/Diamond White outline small.png" className="mx-1.5" alt="" />
                  <p className="text-[14px]">FRONTAL POSE</p>
                </div>
                <div className="flex items-center mx-5">
                  <img src="/images/Diamond White outline small.png" className="mx-1.5" alt="" />
                  <p className="text-[14px]">ADEQUATE LIGHTING</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )}

    {photoTaken && (
      <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center text-[var(--background)]">
        <img src={capturedImage} alt="Captured" className=" absolute h-full object-cover z-10" />

        <p className="z-20 text-xl">GREAT SHOT!</p>

        <button
          onClick={() => {
            setCapturedImage(null);
            setPhotoTaken(false);
          }}
          className="absolute bottom-24 sm:bottom-20 left-20 flex items-center space-x-2 cursor-pointer group transition z-10"
        >
          <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
            <span className="-rotate-45">◀</span>
          </div>
          <span className="pl-2 group-hover:translate-x-3 duration-300">
            BACK
          </span>
        </button>

        <button
          onClick={handleProceed}
          className="absolute bottom-24 sm:bottom-26 right-20 flex items-center space-x-2 cursor-pointer group transition z-10"
        >
          <span className="pr-2 group-hover:-translate-x-3 duration-300">
            PROCEED
          </span>
          <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
            <span className="-rotate-45">▶</span>
          </div>
        </button>
      </div>
    )}
    </section>
  );
}
