"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <div>
        <div className="row flex justify-between items-center py-6">
          <div className="left-box-nav flex items-center">
            <Link href="/" title='Back to Home'>
              <h1 className='ml-12 font-medium mr-5'>SKINSTRIC</h1>
            </Link>
            <span className='text-black/50'>{"["}</span>
            <p className='mx-2 text-black/50 font-semibold text-sm'>INTRO</p>
            <span className='text-black/50'>{"]"}</span>
          </div>
          {pathname === '/' && (
            <button className='mr-8 py-2 px-4 bg-[#1A1B1C] text-[#ffffff] text-xs lg:text-base lg:px-6 lg:mr-12 cursor-no-drop'>ENTER CODE</button>
          )}
        </div>
      </div>
    </nav>
  );
}
