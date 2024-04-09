import React from 'react'
import { Navbar } from '../components/Navbar'
import {Element} from 'react-scroll'

import header from "../assets/header.jpg"
import { CheckOut } from '../components/CheckOut';
import { About } from '../components/About';
import { LivingRoom } from '../components/LivingRoom';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Explore } from '../components/Explore';
import { Footer } from '../components/Footer';

export const Home = () => {
   {
        const myStyle = {
            backgroundImage: `url(${header})`,
            height: "100vh",
            fontSize: "18px", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
  return (
    <main class=" overflow-x-hidden">
       {/* Hero-section */}
        <div className="hero-section -mt-10 flex flex-col  ">
           
             <div style={myStyle} className='flex flex-col  '>  
             <div className=' p-14  items-center justify-center '>
             <Navbar/>
            
             <div className='flex flex-col items-center justify-center place-content-center mt-40'>
                <div className='text-richblack-300'> Simple - Unique - Friendly </div>
                <div className='lg:text-7xl text-4xl  font-semibold mt-3 text-center text-white m-5' > <h1> Make Yourself At Home </h1>
                   <h2>In Our <span className='text-pink-200'> Hotel</span>.</h2>
                 </div>
             </div>
             </div>
          
            </div>
            <div>
                <CheckOut/>
            </div>
            <Element name='About'>  <About/> </Element>
            <Element name='Home'>  <LivingRoom/></Element>
            <Element name='Service'><Services/> </Element>
            <Element name="stats"> <Stats/> </Element>
            <Element name='Explore'> <Explore/> </Element>
            <Element name="Contact"> <Footer/></Element>


            
            
           
        </div>
     
    </main>
  );
}
}
