
import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";
import {motion } from 'framer-motion'
function About() {
  const [isHover ,setHover] =useState(false)
  return (
    <div
     data-scroll data-scroll-section data-scroll-speed="-.2" 
     className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl
     rounded-tr-3xl text-black '>
       <h1 className="text-[4vw]  tracking-tight leading-[4.5vw]">
       Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
       </h1>
       <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562] ">
       <div className="w-1/2 ">
       <h1 className='text-7xl'>Our Approach:</h1>
       <motion.button  className="flex gap-5 items-center  uppercase items-center
        px-5 py-3 bg-zinc-900 mt-10 rounded-full text-white w-[16vw] h-[5vw] ">Read More
        <motion.div
        
        className='w-2 h-2 hover:w-10 hover:h-10 bg-zinc-100 
        rounded-full flex items-center justify-center
         rotate-45'>
          <h3  className=' text-black'> 
          <FaArrowUp />
          </h3>
        </motion.div>
       </motion.button> 
       
       </div>
      <div className='w-1/2 h-[70vh]  rounded-3xl'>
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
      </div>

        </div></div>
  )
}

export default About