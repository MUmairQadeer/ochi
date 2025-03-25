import React, { useState } from 'react'
import {delay, motion, useAnimation } from "framer-motion"
function Featured() {
  const cards =[useAnimation(), useAnimation()];

  const handleHover =(index) =>{
    cards[index].start({y:0});
  }
  const handleHoverEnd =(index) =>{
    cards[index].start({y:"100%"});
  }
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] pb-20'>
            <h1 className='text-6xl tracking-tighter'>Featured Projects</h1>
        </div>
        <div className="px-20"> 
        <div className="cards w-full flex gap-10 mt-10 items-center justify-center ">

            
            <motion.div 
            onHoverStart={()=> handleHover(0)}
            onHoverEnd={()=> handleHoverEnd(0)}

             className="cardcontainer relative w-1/2 h-[70vh] bg-red-500 rounded-2xl "> 
               <h1 className='absolute left-full flex overflow-hidden z-[9] text-8xl leading-none tight-none -translate-x-1/2 top-1/2 -translate-y-1/2  '>
                  {"FYDE".split("").map((char ,index) =>
                  {
                    return <motion.span
                    className='inline-block '
                      initial={{y:"100%"}}
                      animate={cards[0]}
                      transition={{ease:[0.45, 0, 0.55, 1], delay:index*.08}}

                      key={index}>{char}</motion.span>
                  })}
               </h1>   <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                {/* <div className='scale-50 h-full w-full bg-green-500 rounded-2xl '>
                
                </div> */}
            </motion.div>

            <motion.div 
            onHoverStart={()=>handleHover(1)}
            onHoverEnd={()=>handleHoverEnd(1)}
             className="cardcontainer relative w-1/2 h-[70vh] bg-red-500 rounded-2xl "> 
            <h1 className='absolute right-full flex overflow-hidden  z-[9] text-8xl leading-none tight-none translate-x-1/2 top-1/2 -translate-y-1/2  '>
            {"VISE".split("").map((char ,index) =>
                  {
                    return <motion.span
                    className='inline-block '
                      initial={{y:"100%"}}
                      animate={cards[1]}
                      transition={{ease:[0.45, 0, 0.55, 1],delay:index*0.08}}

                      key={index}>{char}</motion.span>
                  })}
               </h1>
               <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                {/* <div className='scale-50 h-full w-full bg-green-500 rounded-2xl '>
                
                </div> */}
            </motion.div>
           
             
            
          
        </div>
        </div>
    </div>
  )
}

export default Featured