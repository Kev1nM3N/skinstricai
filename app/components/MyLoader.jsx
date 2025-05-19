import React from 'react'
import Image from 'next/image'
import Loader from './Loader'

export default function MyLoader() {
  return (
    <section>
        <div className='w-full h-[50vh] relative flex flex-col items-center justify-center'>
            <h1 className='text-[16px] text-center font-semibold leading-tight pb-6'>PREPARING YOUR ANALYSIS...</h1>
            <Loader />
            <figure className='mx-8 absolute top-30'>
                <Image
                    src="/images/full rectangle.png"
                    alt="border"
                    width={400}
                    height={400}
                    className="rectangleBorder mx-auto"
                />
            </figure>
        </div>
    </section>
  )
}