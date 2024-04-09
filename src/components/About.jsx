import React from 'react'
import { Pinkbtn } from './Pinkbtn'
import about from "../assets/about.jpg";

export const About = () => {
  return (
    <div className='flex lg:flex-row  items-center justify-center w-11/12 mx-auto m-10 py-10 px-20 gap-10  '>
        <div className=''>
            <img src={about} alt='about ' className=' rounded-md scale-125' />
        </div>
        <div className='flex flex-col m-5 p-10 '>
           <div className='flex items-center  gap-5'> 
           <div className='text-[20px] font-mono tracking-tight hover:tracking-wide '>
                ABOUT US 
            </div>
            <div className='h-[3px] w-20 bg-pink-200'></div>

           </div>
           <div className='flex flex-col  gap-y-5 mt-5'>
             <p className='text-4xl lg:w-[50%] w-fit font-inter font-bold'>The Best Holidays Start Here!</p>
             <p className='text-[18px] text-richblack-300  lg:w-[70%] w-fit'>With a focus on quality accommodations, personalized experiences, 
             and seamless booking, our platform is dedicated to ensuring that every traveler 
             embarks on their dream holiday with confidence and excitement.</p>
             <Pinkbtn> Read More </Pinkbtn>
           </div>
        </div>
       

    </div>
  )
}
