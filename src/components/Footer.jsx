import React from 'react'
import logo from "../assets/logo.png"
import { Pinkbtn } from './Pinkbtn'

import { FaFacebookSquare ,FaInstagramSquare ,FaYoutubeSquare ,FaTwitter } from "react-icons/fa";
import {Link ,Element} from 'react-scroll'



export const Footer = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-center bg-richblack-900 w-full  py-10  mt-10 '>
        <div className='flex flex-col lg:items-start items-center justify-around  gap-3  gap-y-5 m-5 p-10  w-screen'>
            <div className='lg:scale-95  '>
                <img src={logo} alt='logo'/>
            </div>
            <div className=' lg:ml-10  text-white w-fit   lg:visible   ' >
            Discover a world of comfort, luxury, and adventure as you explore our curated selection 
            of hotels, making every moment of your getaway truly extraordinary.
            </div>
            <div className='lg:ml-10 home  '>
                <Pinkbtn> Book Now </Pinkbtn>
            </div>
        </div>
        <div className='flex flex-col items-start justify-center gap-y-2 w-full ml-24 '>
            <p className='text-[20px] font-inter text-white'> QUICK LINKS  </p>
              <div className='flex flex-col items-start justify-center w-full gap-y-1 text-[18px]  text-richblack-300'>
              <Link to="/">Browse Destinations</Link>
            <Link to="/">Special Offers & Packages</Link>
            <Link to="/">Room Types & Amenities</Link>
            <Link to="/">Customer Reviews & Ratings</Link>
             <Link to="/">Travel Tips & Guides</Link>
              </div>


        </div>
        <div className='flex flex-col items-start w-full ml-24 justify-center gap-y-2 mt-10'>
            <p className='text-[20px] font-inter text-white'> OUR SERVICES </p>
              <div className='flex flex-col items-start justify-center gap-y-1 text-[18px]  text-richblack-300'>
              <Link to="/">Concierge Assistance</Link>
            <Link to="/">Flexible Booking Options</Link>
            <Link to="/">Airport Transfers</Link>
            <Link to="/">Wellness & Recreation</Link>
            
              </div>


        </div>
        <div className='flex flex-col items-start w-full ml-24 justify-center gap-y-2 mt-10  '>
            <p className='text-[20px] font-inter text-white'> CONTACT US ON  </p>
              <div className='flex flex-col items-start justify-center gap-y-1 text-blue-100 text-[18px]'>
               <div className='flex gap-2'>
               <span className='text-white'>Email Us On</span>   <Link to="/">myhotel1@gmail.com</Link>

               </div>
               </div>
               <Element name="Contact" className='text-white flex scale-150 gap-2 m-2 ml-5'>
               <FaFacebookSquare />
              <FaInstagramSquare/>
              <FaYoutubeSquare/>
              <FaTwitter/>
               </Element>


        </div>
    </div>
  )
}
