"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "@/app/styles.css";
import Link from "next/link";

export default function Summary() {
  const [demographics, setDemographics] = useState(null);
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [activeGroup, setActiveGroup] = useState("race");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("demographics"));
    if (data) {
      setDemographics(data);

      const topRace = Object.entries(data.race).sort((a, b) => b[1] - a[1])[0];
      const topAge = Object.entries(data.age).sort((a, b) => b[1] - a[1])[0][0];
      const topGender = Object.entries(data.gender).sort(
        (a, b) => b[1] - a[1]
      )[0][0];
      
      setSelectedRace(topRace[0]);
      setSelectedAge(topAge);
      setSelectedGender(topGender);
    }
  }, []);

  if (!demographics) return <p className="text-center">Loading results...</p>;
  const selectedLabel =
    activeGroup === "race"
      ? selectedRace
      : activeGroup === "age"
      ? selectedAge
      : selectedGender;

  const selectedConfidence =
    demographics?.[activeGroup]?.[selectedLabel] !== undefined
      ? (demographics[activeGroup][selectedLabel] * 100).toFixed(2)
      : 0;

  return (
    <section className="min-h-[90vh] px-8">
      <div className="main flex flex-col">
        <div className="textTitle">
          <h2 className="font-semibold leading-[24px]">A.I. ANALYSIS</h2>
          <h3 className="text-4xl md:text-[74px] tracking-tighter">
            DEMOGRAPHICS
          </h3>
          <h4 className="text-sm leading-[24px]">PREDICTED RACE &amp; AGE</h4>
        </div>

        <div className="mainElements my-8 md:flex md:w-full md:min-h-[50vh]">
          {/* LEFT BOX */}
          <div className="topBox w-full md:w-[20%] px-2">
            {/* RACE */}
            <div
              className={`p-3 flex-1 flex flex-col justify-between cursor-pointer ${
                activeGroup === "race"
                  ? "bg-[#1A1B1C] text-white"
                  : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
              }`}
              onClick={() => setActiveGroup("race")}
            >
              <h4>{selectedRace.toUpperCase()}</h4>
              <h4 className="font-semibold pt-8">RACE</h4>
            </div>

            {/* AGE */}
            <div
              className={`p-3 flex-1 flex flex-col justify-between cursor-pointer border-t my-3 ${
                activeGroup === "age"
                  ? "bg-[#1A1B1C] text-white"
                  : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
              }`}
              onClick={() => setActiveGroup("age")}
            >
              <h4>{selectedAge}</h4>
              <h4 className="font-semibold pt-8">AGE</h4>
            </div>

            {/* GENDER */}
            <div
              className={`p-3 flex-1 flex flex-col justify-between cursor-pointer border-t my-3 ${
                activeGroup === "gender"
                  ? "bg-[#1A1B1C] text-white"
                  : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
              }`}
              onClick={() => setActiveGroup("gender")}
            >
              <h4>{selectedGender.toUpperCase()}</h4>
              <h4 className="font-semibold pt-8">SEX</h4>
            </div>
          </div>

          {/* MIDDLE BOX */}
          <div className="middleBox bg-gray-100 my-4 flex flex-col items-center md:items-end md:justify-between md:my-0 md:border-t md:w-[60%] md:mx-2">
            <h1 className="hidden md:block text-[34px] my-2 px-6 w-full">
              {selectedRace.toUpperCase()}
            </h1>
            <div className="circleGraph px-6 py-3 md:w-[400px]">
              <CircularProgressbar
                strokeWidth={2}
                value={Math.floor(selectedConfidence)}
                text={`${Math.floor(selectedConfidence)}%`}
              />
            </div>
            <p className="text-xs text-[#A0A4AB] mb-1 leading-[24px] text-center md:hidden">
              If A.I. estimate is wrong, select the correct one
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="lastBox bg-gray-100 py-4 md:border-t w-full md:w-[30%] px-2 md:mx-2">
            <div>
              <div className="flex justify-between px-4">
                <h4 className="leading-[24px] tracking-tight font-medium mb-2 uppercase">
                  {activeGroup}
                </h4>
                <h4 className="leading-[24px] tracking-tight font-medium mb-2">
                  A.I. CONFIDENCE
                </h4>
              </div>

              {Object.entries(demographics[activeGroup])
                .sort((a, b) => {
                  if (activeGroup === "age") {
                    const aStart = parseInt(a[0].split("-")[0], 10);
                    const bStart = parseInt(b[0].split("-")[0], 10);
                    return aStart - bStart;
                  } else {
                    return b[1] - a[1];
                  }
                })
                .map(([label, value]) => {
                  const percent = Math.floor((value * 100).toFixed(2));

                  const isSelected =
                    (activeGroup === "race" && selectedRace === label) ||
                    (activeGroup === "age" && selectedAge === label) ||
                    (activeGroup === "gender" && selectedGender === label);

                  return (
                    <div
                      key={label}
                      className={`flex items-center justify-between h-[48px] px-4 cursor-pointer ${
                        isSelected
                          ? "bg-[#1A1B1C] text-white"
                          : "hover:bg-[#E1E1E2]"
                      }`}
                      onClick={() => {
                        if (activeGroup === "race") {
                          setSelectedRace(label);
                        } else if (activeGroup === "age") {
                          setSelectedAge(label);
                        } else if (activeGroup === "gender") {
                          setSelectedGender(label);
                        }
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <img
                          src={`/images/${
                            isSelected
                              ? "radio-button.png"
                              : "white-radio-button.png"
                          }`}
                          alt=""
                        />
                        <span className="pl-1 leading-6 tracking-tight capitalize">
                          {label}
                        </span>
                      </div>
                      <span className="pl-1 leading-6 tracking-tight">
                        {percent}%
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="flex justify-between max-w-full mt-4 mb-14 px-4">
          <Link
            href="/pages/results"
            className="flex items-center space-x-2 cursor-pointer group transition"
          >
            <div className="w-8 h-8 border rotate-45 flex items-center justify-center">
              <span className="-rotate-45">◀</span>
            </div>
            <span className="pl-2 group-hover:translate-x-3 duration-300">
              BACK
            </span>
          </Link>

          <p className="text-lg text-[#A0A4AB] mb-1 leading-[24px] text-center hidden md:block cursor-default">
            If A.I. estimate is wrong, select the correct one.
          </p>

          <Link
            href="/"
            className="flex items-center space-x-2 cursor-pointer group transition"
          >
            <span className="pr-2 group-hover:-translate-x-3 duration-300">
              HOME
            </span>
            <div className="w-8 h-8 border rotate-45 flex items-center justify-center">
              <span className="-rotate-45">▶</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
