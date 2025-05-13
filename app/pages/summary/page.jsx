"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function page() {
    const [demographics, setDemographics] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("demographics"));
        setDemographics(data);
    }, []);

  if (!demographics) return <p className="text-center">Loading results...</p>;
  
  return (
    <section>
        <h1>Demographics</h1>
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
