import React from 'react'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav>
        <div>
            <div className="row flex justify-between items-center py-6">
              <div className="left-box-nav flex">
                <h1 className='ml-12 font-medium mr-5'>SKINSTRIC</h1>
                <Image src="/images/location.png" width={75} height={80} alt='heading'/>
              </div>
                <button className='mr-12 py-2 px-6 bg-[#1A1B1C] text-[var(--background)]'>ENTER CODE</button>
            </div>
        </div>
    </nav>
  )
}