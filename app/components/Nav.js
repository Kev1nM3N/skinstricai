import React from 'react'

export default function Nav() {
  return (
    <nav>
        <div className="outline-2 outline-red-700">
            <div className="row flex justify-between items-center py-6">
                <h1 className='ml-12 font-semibold'>SKINSTRIC <span className='opacity-60'>[  INTRO  ]</span></h1>
                <button className='mr-12 py-2 px-6 bg-[#1A1B1C] text-[var(--background)] font-semibold'>ENTER CODE</button>
            </div>
        </div>
    </nav>
  )
}