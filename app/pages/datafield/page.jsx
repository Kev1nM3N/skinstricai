"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function UserInputs() {
  const [step, setStep] = useState(1);
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState(() => localStorage.getItem("userName") || "");
  const [location, setLocation] = useState(() => localStorage.getItem("userLocation") || "");

  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("userLocation", location);
  }, [location]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (step === 1 && name.trim()) {
        setStep(2);
      }
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center">
      {/* Back Button */}
      <Link href="/" className="absolute -bottom-80 left-15 flex items-center space-x-2 cursor-pointer group transition">
        <div className="w-8 h-8 border rotate-45 flex items-center justify-center">
          <span className="-rotate-45">◀</span>
        </div>
        <span className="pl-2 group-hover:translate-x-3 duration-300">BACK</span>
      </Link>

      {/* Top Label */}
      <h1 className="absolute -top-105 left-12 font-semibold">TO START ANALYSIS</h1>

      {/* Input Field */}
      <div className="border-dotted border p-28">
        <p className="text-sm tracking-tighter mb-2 text-black/50">
          {step === 1
            ? !focused && !name
              ? "CLICK TO TYPE"
              : "INTRODUCE YOURSELF"
            : !focused && !location
              ? "CLICK TO TYPE"
              : "WHERE ARE YOU FROM?"}
        </p>

        <input
          type="text"
          value={step === 1 ? name : location}
          onChange={(e) => step === 1 ? setName(e.target.value) : setLocation(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={
            !focused
              ? step === 1
                ? "Introduce Yourself"
                : "Where are you from?"
              : "Enter A Location"
          }
          className="text-2xl sm:text-6xl border-b outline-none text-center placeholder-black tracking-tighter"
        />
      </div>
    </section>
  );
}
