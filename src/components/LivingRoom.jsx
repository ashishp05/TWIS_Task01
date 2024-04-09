import React from 'react'
import { RoomCard } from './RoomCard'


export const LivingRoom = () => {
  return (
    <div className=''>
        <div className='flex flex-col m-5 gap-y-5 lg:w-11/12 w-full mx-auto lg:m-10 p-10'>
            <div className='flex items-center  gap-5'>
                <div  className='text-[20px] font-mono tracking-tight hover:tracking-wide '>OUR LIVING ROOM</div>
                <div className='h-[3px] w-20 bg-pink-200'></div>
            </div>
            <div className='text-4xl lg:w-[35%] w-fit font-inter  font-bold'>
            The Most Memorable Rest Time Starts Here.
            </div>
        </div>
        <div className='w-screen lg:w-11/12 flex items-center justify-center   '> 
             <RoomCard/>
        </div>
    </div>
  )
}
