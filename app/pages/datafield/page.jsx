import React from 'react';
import Link from 'next/link';

export default function UserInputs() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center">
      <Link href="/">
        <div className="absolute -bottom-105 left-15 flex items-center space-x-2 cursor-pointer group transition">
          <div className="w-8 h-8 border rotate-45 flex items-center justify-center">
            <span className="-rotate-45">◀</span>
          </div>
          <span className='pl-2 group-hover:translate-x-3 duration-300'>BACK</span>
        </div>
      </Link>

      <div className='absolute -top-116 left-12'>
        <h1 className='font-medium'>TO START ANALYSIS</h1>
      </div>

      <div className="border-dotted border-[1px] p-16 rounded-full">
        <p className="text-xs tracking-widest mb-2">CLICK TO TYPE</p>
        <input
          type="text"
          placeholder="Introduce Yourself"
          className="text-2xl sm:text-4xl font-light border-b outline-none text-center"
        />
      </div>
    </section>
  );
}
