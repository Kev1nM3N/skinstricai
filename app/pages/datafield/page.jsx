"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/app/components/Loader";

export default function UserInputs() {
  const [step, setStep] = useState(1);
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userLocation");
    setName("");
    setLocation("");
    setStep(1);
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("userLocation", location);
  }, [location]);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedLocation = localStorage.getItem("userLocation");
  
    if (storedName) setName(storedName);
    if (storedLocation) setLocation(storedLocation);
  }, []);
  

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (step === 1) {
        if (name.trim()) {
          setStep(2);
          setError("");
        } else {
          setError("Please enter your name");
        }
      } else if (step === 2) {
        if (location.trim()) {
          setError("");
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setComplete(true);
          }, 3000); // 3 seconds
        } else {
          setError("Please enter a valid city");
        }
      }
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center">
      {/* Back Button */}
      {!loading && !complete && (
        <Link href="/" className="absolute -bottom-110 left-15 flex items-center space-x-2 cursor-pointer group transition">
          <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
            <span className="-rotate-45">◀</span>
          </div>
          <span className="pl-2 group-hover:translate-x-3 duration-300">BACK</span>
        </Link>
      )}

      {/* Top Label */}
      {!loading && !complete && (
        <h1 className="absolute -top-130 left-12 font-semibold">TO START ANALYSIS</h1>
      )}

      {/* LOADING STATE */}
      {loading && (
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-xl tracking-tight">Processing submission</h1>
          <Loader />
        </div>
      )}

      {/* COMPLETE STATE */}
      {complete && (
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-xl font-semibold">Thank you!</h1>
          <p className="text-sm text-black/60">Proceed to the next step</p>
          <Link href="/pages/analysis" className="absolute -bottom-115 right-25 flex items-center space-x-2 cursor-pointer group transition">
            <span className="pr-2 group-hover:-translate-x-3 duration-300">PROCEED</span>
            <div className="w-8 h-8 border rotate-45 flex items-center justify-center group-hover:w-10 group-hover:h-10 duration-300">
              <span className="-rotate-45">▶</span>
            </div>
          </Link>
        </div>
      )}

      {/* FORM STATE */}
      {!loading && !complete && (
        <div className="">
          <p className="text-sm tracking-tight mb-2 text-black/50">CLICK TO TYPE</p>
          {error && <p className="text-xs text-red-500 mb-2">{error}</p>}
          <input
            type="text"
            value={step === 1 ? name : location}
            onChange={(e) => step === 1 ? setName(e.target.value) : setLocation(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={step === 1 ? "Introduce Yourself" : "Where are you from?"}
            className="text-5xl text-center border-b border-black focus:outline-none w-[372px] sm:w-[432px] tracking-[-0.07em] leading-[64px] text-[#1A1B1C]"
          />
          <figure className="absolute -bottom-50 left-0 w-full -z-1 lg:-bottom-64">
            <img src="/images/full rectangle.png" alt="border" className="w-[440px] h-[440px] mx-auto lg:w-[580px] lg:h-[580px] rectangleBorder" />
          </figure>
        </div>
      )}
    </section>
  );
}
