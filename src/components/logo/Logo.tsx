import React from 'react'

const Logo = () => {
  return (
    <div className='inline-flex gap-[15px] items-center ' >
        <div className='inline-flex gap-1 items-start'>
            <div className='w-8 h-8  md:w-14 md:h-14 aspect-square rounded-full bg-lightblue-400  md:border-white md:border-4'></div>
            <div className='w-3 h-3 md:w-5 md:h-5 aspect-square rounded-full bg-lightred-500 md:border-4 md:border-white'></div>
        </div>
        <h2  className='hidden md:block  text-[30px] font-bold text-white'>BeLaundry</h2>
    </div>
  )
}

export default Logo