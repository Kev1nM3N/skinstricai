"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Link from "next/link";
import "@/app/styles.css";

export default function Summary() {
  const [demographics, setDemographics] = useState(null);
  const [selected, setSelected] = useState({ race: "", age: "", gender: "" });
  const [activeGroup, setActiveGroup] = useState("race");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("demographics"));
    if (data) {
      const top = (group) =>
        Object.entries(data[group]).sort((a, b) => b[1] - a[1])[0][0];

      setDemographics(data);
      setSelected({ race: top("race"), age: top("age"), gender: top("gender") });
    }
  }, []);

  if (!demographics) return <p className="text-center">Loading results...</p>;

  const label = selected[activeGroup];
  const confidence = (demographics[activeGroup][label] * 100).toFixed(2);

  const renderSelector = (group, title) => (
    <div
      className={`p-3 my-3 flex flex-col justify-between cursor-pointer ${
        activeGroup === group ? "bg-[#1A1B1C] text-white" : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
      }`}
      onClick={() => setActiveGroup(group)}
    >
      <h4>{selected[group].toUpperCase()}</h4>
      <h4 className="font-semibold pt-8">{title}</h4>
    </div>
  );

  return (
    <section className="min-h-[90vh] px-8">
      <div className="main flex flex-col">
        {/* Header */}
        <div className="textTitle">
          <h2 className="font-semibold leading-[24px]">A.I. ANALYSIS</h2>
          <h3 className="text-4xl md:text-[74px] tracking-tighter">DEMOGRAPHICS</h3>
          <h4 className="text-sm leading-[24px]">PREDICTED RACE &amp; AGE</h4>
        </div>

        {/* Main Content */}
        <div className="mainElements my-8 md:flex md:w-full md:min-h-[50vh]">
          {/* Left: Category Selectors */}
          <div className="topBox w-full md:w-[20%] px-2">
            {renderSelector("race", "RACE")}
            {renderSelector("age", "AGE")}
            {renderSelector("gender", "SEX")}
          </div>

          {/* Middle: Chart */}
          <div className="middleBox bg-gray-100 my-4 flex flex-col items-center md:items-end md:justify-between md:my-0 md:border-t md:w-[60%] md:mx-2">
            <h1 className="hidden md:block text-[34px] my-2 px-6 w-full">
              {label.toUpperCase()}
            </h1>
            <div className="circleGraph px-6 py-3 md:w-[400px]">
              <CircularProgressbar strokeWidth={2} value={Math.floor(confidence)} text={`${Math.floor(confidence)}%`} />
            </div>
            <p className="text-xs text-[#A0A4AB] mb-1 text-center md:hidden">
              If A.I. estimate is wrong, select the correct one
            </p>
          </div>

          {/* Right: List of Options */}
          <div className="lastBox bg-gray-100 py-4 md:border-t w-full md:w-[30%] px-2 md:mx-2">
            <div className="flex justify-between px-4">
              <h4 className="tracking-tight font-medium mb-2 uppercase">{activeGroup}</h4>
              <h4 className="tracking-tight font-medium mb-2">A.I. CONFIDENCE</h4>
            </div>

            {Object.entries(demographics[activeGroup])
              .sort((a, b) => {
                if (activeGroup === "age") {
                  return parseInt(a[0]) - parseInt(b[0]);
                }
                return b[1] - a[1];
              })
              .map(([item, val]) => {
                const percent = Math.floor(val * 100);
                const isActive = selected[activeGroup] === item;

                return (
                  <div
                    key={item}
                    className={`flex items-center justify-between h-[48px] px-4 cursor-pointer ${
                      isActive ? "bg-[#1A1B1C] text-white" : "hover:bg-[#E1E1E2]"
                    }`}
                    onClick={() =>
                      setSelected((prev) => ({ ...prev, [activeGroup]: item }))
                    }
                  >
                    <div className="flex items-center gap-1">
                      <img
                        src={`/images/${isActive ? "radio-button.png" : "white-radio-button.png"}`}
                        alt=""
                      />
                      <span className="capitalize">{item}</span>
                    </div>
                    <span>{percent}%</span>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between max-w-full mt-4 mb-14 px-4">
          <Link href="/pages/results" className="flex items-center space-x-2 group transition">
            <div className="w-8 h-8 border rotate-45 flex items-center justify-center">
              <span className="-rotate-45">◀</span>
            </div>
            <span className="pl-2 group-hover:translate-x-3 duration-300">BACK</span>
          </Link>

          <p className="text-lg text-[#A0A4AB] mb-1 hidden md:block cursor-default">
            If A.I. estimate is wrong, select the correct one.
          </p>

          <Link href="/" className="flex items-center space-x-2 group transition">
            <span className="pr-2 group-hover:-translate-x-3 duration-300">HOME</span>
            <div className="w-8 h-8 border rotate-45 flex items-center justify-center">
              <span className="-rotate-45">▶</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
