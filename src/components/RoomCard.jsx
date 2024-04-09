import React from 'react'
import { livingroomdetails } from '../data/livingroomdetails'
import { Pinkbtn } from './Pinkbtn'




export const RoomCard = () => {
   
  return (
    
    <div className='flex lg:flex-row flex-col w-screen mx-auto  items-center  gap-10  lg:m-5 p-10 '>
        {
            livingroomdetails.map( (element , index) =>
            {
                return (
                    <div key={index} className=' p-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-richblack-800 transition-shadow shadow-richblack-300'>
                        <div className='relative -m-3'> 
                         <img src={element.image} alt='room' className='rounded-md  -z-10 relative h-[280px]'   />
                        

                        </div>
                        <div className='flex flex-col items-start justify-center gap-y-2  p-2  -m-3 z-10 bg-white '>
                           <p className='text-[20px] font-inter '>  {element.title}</p>
                           <p className='text-[18px] font-inter text-richblack-300 '> {element.desctiption} </p>
                           <p  className='text-[17px] font-inter text-richblack-300 ' >Starting From  <span className='text-[18px] font-inter text-black font-medium'> {element.price} </span> </p>
                        </div>
                        <div className='mt-3 w-full mx-auto'>
                            <Pinkbtn> Book Now   </Pinkbtn>
                        </div>
                    </div>
                )
            })

        }
    </div>
  )
}
