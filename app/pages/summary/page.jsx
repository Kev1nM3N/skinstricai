"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import '@/app/styles.css'
import Link from "next/link";

export default function page() {
    const [demographics, setDemographics] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("demographics"));
        setDemographics(data);
    }, []);

  if (!demographics) return <p className="text-center">Loading results...</p>;
  
  return (
    <section className="min-h-[90vh] px-8">
      <div className="main flex flex-col">
        <div className="textTitle">
          <h2 className="font-semibold leading-[24px]">A.I. ANALYSIS</h2>
          <h3 className="text-4xl md:text-[74px] tracking-tighter">DEMOGRAPHICS</h3>
          <h4 className="text-sm leading-[24px]">PREDICTED RACE &amp; AGE</h4>
        </div>

        <div className="mainElements my-8 md:flex md:w-full md:min-h-[50vh]">
          <div className="topBox w-full md:w-[20%] px-2">
            <div className="race p-3 cursor-pointer bg-[#1A1B1C] text-white hover:bg-black flex-1 flex flex-col justify-between">
              <h4>SOUTH ASIAN</h4>
              <h4 className="font-semibold pt-8">RACE</h4>
            </div>
            <div className="age p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t my-3">
              <h4>0-9</h4>
              <h4 className="font-semibold pt-8">AGE</h4>
            </div>
            <div className="sex p-3 cursor-pointer bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t my-3">
              <h4>FEMALE</h4>
              <h4 className="font-semibold pt-8">SEX</h4>
            </div>
          </div>

          <div className="middleBox bg-gray-100 my-4 flex flex-col items-center 
            md:items-end md:justify-between md:my-0 md:border-t md:w-[60%] md:mx-2 ">
            <h1 className="hidden md:block text-[40px] my-2 px-6 w-full">South Asian</h1>
            <div className="circleGraph px-6 py-3 md:w-[400px]">
              <CircularProgressbar strokeWidth={2} value={53} text={`${53}%`} />
            </div>
            <p className="text-xs text-[#A0A4AB] mb-1 leading-[24px] text-center md:hidden">
              If A.I. estimate is wrong, select the correct one.
            </p>
          </div>

          <div className="lastBox bg-gray-100 py-4 md:border-t w-full md:w-[30%] px-2 md:mx-2">
            <div>
              <div className="flex justify-between px-4">
                <h4 className="leading-[24px] tracking-tight font-medium mb-2">RACE</h4>
                <h4 className="leading-[24px] tracking-tight font-medium mb-2">A.I. CONFIDENCE</h4>
              </div>
              <div className="flex items-center justify-between h-[48px] px-4 cursor-pointer bg-[#1A1B1C] text-white hover:bg-black">
                <div className="flex items-center gap-1">
                  <img src="/images/radio-button.png" alt="" />
                  <span className="pl-1 leading-6 tracking-tight">South asian</span>
                </div>
                <span className="pl-1 leading-6 tracking-tight">53%</span>
              </div>
              <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
                <div className="flex items-center gap-1">
                  <img src="/images/white-radio-button.png" alt="" />
                  <span className="pl-1 leading-6 tracking-tight">Black</span>
                </div>
                <span className="pl-1 leading-6 tracking-tight">44%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between max-w-full mt-10 px-4 md:px-0">
          <Link href="/pages/results" className="flex items-center space-x-2 cursor-pointer group transition">
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

          <Link href="/" className="flex items-center space-x-2 cursor-pointer group transition">
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
  )
}

{
  /* {["race", "age", "gender"].map((group) => (
        <div key={group} className="mb-4">
          <h2 className="font-semibold capitalize">{group}</h2>
          <ul className="list-disc ml-5">
            {Object.entries(demographics[group])
              .sort((a, b) => b[1] - a[1])
              .map(([label, value]) => (
                <li key={label}>
                  {label}: {(value * 100).toFixed(2)}%
                </li>
              ))}
          </ul>
        </div>
      ))} */
}
