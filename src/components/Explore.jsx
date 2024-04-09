import React from 'react'
import explore from "../assets/explore.jpg"
import { Pinkbtn } from './Pinkbtn'

export const Explore = () => {
  return (
    <div className='lg:flex flex-col items-center justify-center w-full mb-5   '>
         <div className='flex flex-col m-5 p-10 gap-y-5 '>
            <div className='flex items-center justify-center gap-5'>
                <div  className='text-[20px] font-mono tracking-tight hover:tracking-wide '>EXPLORE </div>
                <div className='h-[3px] w-20 bg-pink-200'></div>
            </div>
            <div className='text-5xl  font-inter  font-bold'>
            What's New Today.
            </div>
        </div>
        <div className='lg:relative w-full mx-auto  ' >
             <div className=' lg:relative  z-10  '>
                <img src={explore} alt='explore' className='lg:w-[100%] w-full lg:h-[50vh] h-[40vh] '/>
             </div>
             <div className=' flex flex-col lg:absolute  bg-white rounded-lg p-7 lg:left-28 lg:top-20 z-10 gap-y-3'>
                <p className='text-[20px] text-richblack-300'>Today's - Menu :</p>
                <p className='text-3xl font-inter w-[80%]'>A New Menu Is Available In Our Hotel.</p>
                <Pinkbtn > Continue</Pinkbtn>
             </div>

        </div>
    </div>
  )
}
