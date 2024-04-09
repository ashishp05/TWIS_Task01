import React from 'react'
import service from "../assets/service.jpg"
import { BsBookmarkStarFill } from "react-icons/bs";
import { Ri24HoursLine } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

export const Services = () => {
  return (
    <div className='relative w-full mx-auto mb-10'>
        <div className='     '>
            <img src={service} alt='service'className='lg:h-[70vh] lg:w-[100%] w-[100vw] lg:visible  '  />

        </div>
        <div className='flex flex-col m-5 p-7    gap-y-5 bg-white  lg:absolute lg:-top-5 lg:right-72  '>
            <div className='flex items-center  gap-5 '>
                <div  className='text-[20px] font-mono tracking-tight hover:tracking-wide '>SERVICES</div>
                <div className='h-[3px] w-20 bg-pink-200'></div>
            </div>
            <div className='text-4xl  font-inter  font-bold'>
            Strive Only For The Best.
            </div>
            <div className='flex flex-col gap-y-12 bg-white w-fit p-10'> 
            <div className='flex items-center gap-5 '>
              <div className='scale-150 rounded-full bg-blue-50 p-2 '>
              <BsBookmarkStarFill />
              </div>
              <p className='text-2xl font-inter '>High Class Security</p>
            </div>
            <div className='flex items-center gap-5 '>
              <div className='scale-150 rounded-full bg-pink-50 p-2 '>
              <Ri24HoursLine />
              </div>
              <p className='text-2xl font-inter '>24 Hours Room Service</p>
            </div>
            <div className='flex items-center gap-5 '>
              <div className='scale-150 rounded-full bg-yellow-5 p-2 '>
              <FaHeadphones />
              </div>
              <p className='text-2xl font-inter '>Conference Room</p>
            </div>
            <div className='flex items-center gap-5 '>
              <div className='scale-150 rounded-full bg-caribbeangreen-100 p-2 '>
              <FaBookOpenReader />
              </div>
              <p className='text-2xl font-inter '>Tourist Guide Support</p>
            </div>
            
            </div>
        </div>
        <div>

        </div>
        
    </div>
  )
}
