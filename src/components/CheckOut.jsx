import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Pinkbtn } from './Pinkbtn';
export const CheckOut = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-10 bg-white items-center justify-around text-pink-200  p-7 mb-3 shadow-md h-fit rounded-lg  w-[90%] -mt-10 mx-auto'>
        <div className='flex items-center gap-4 text-balance'>
            <div className='scale-150 mt-1 '>
            <FaCalendarAlt />
            </div>
            <div >
                <p className='text-black  font-semibold'>CHECK-IN</p>
                <p className='text-richblack-500'>Check In</p>
            </div>
        </div>
        <div className='flex items-center gap-4 text-balance'>
            <div className='scale-150 mt-3 '>
            <FaCalendarAlt />
            </div>
            <div>
                <p  className='text-black  font-semibold'>CHECK-OUT</p>
                <p className='text-richblack-500'>Check Out</p>
            </div>
        </div>
        <div className='flex items-center gap-4 text-balance'>
            <div className='scale-150 mt-3 '>
            <BsFillPersonFill />
           
            </div>
            <div >
                <p className='text-black  font-semibold'>GUEST</p>
                <p className='text-richblack-500'>Guest</p>
            </div>
        </div>
        <div>
            <Pinkbtn>CHECK-IN/OUT</Pinkbtn>
        </div>
    </div>
  )
}
