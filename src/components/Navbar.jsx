import React from 'react'
import logo from "../assets/logo.png"
import {Link } from 'react-scroll'
import { Pinkbtn } from './Pinkbtn'

export const Navbar = () => {
  return (
    <div className=' flex lg:flex-row       items-center justify-around p-3    '>
        <div className='scale-75'>
            <img src={logo} alt='logo' />
        </div> 
        <div className='flex'>
          <ul className='lg:flex items-center justify-center gap-12 text-[18px] text-white font-inter font-500 lg:visible hidden '>
            <li> 
              <Link to="Home" smooth={true} duration={500}>Home</Link>
            </li>
            <li> 
              <Link to="About" smooth={true} duration={500}>About</Link>
            </li>
            <li> 
              <Link to="Service" smooth={true} duration={500}>Service</Link>
            </li>
            <li> 
              <Link to="Explore" smooth={true} duration={500}>Explore</Link>
            </li>
            <li> 
              <Link to="Contact" smooth={true} duration={500}>Contact</Link>
            </li>

          </ul>

        </div>
        <div>
            <Pinkbtn>Book Now</Pinkbtn>
        </div>
    </div>
  )
}
