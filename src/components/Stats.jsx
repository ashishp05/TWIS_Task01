import React from 'react'

export const Stats = () => {
  return (
    <div className='flex lg:flex-row md:flex-col md:gap-y-5  flex-col gap-y-5 mb-5  items-center justify-around  shadow-lg   rounded-md m-5 p-5 w-11/12 mx-auto  '>
        <div className='flex flex-col items-center text-center'>
            <div className='text-4xl font-inter font-semibold'>25+</div>
            <div className='text-[20px] text-richblack-300'>
            Properties Available
            </div>
        </div>
        <div className='flex flex-col items-center  text-center'>
            <div className='text-4xl font-inter font-semibold'>350+</div>
            <div className='text-[20px] text-richblack-300'>
            Bookings Completed      
            </div>
        </div>
        <div className='flex flex-col items-center text-center'>
            <div className='text-4xl font-inter font-semibold'>600+</div>
            <div className='text-[20px] text-richblack-300'>
           Happy Customers
            </div>
        </div>
    </div>
  )
}
