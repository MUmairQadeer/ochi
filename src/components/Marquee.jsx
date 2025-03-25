import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {
  
  return (
    <div 
    data-scroll data-scroll-section data-scroll-speed="-0.25"
     className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-600'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex
         whitespace-nowrap  overflow-hidden">
            <motion.h1 key="marquee 1" 
              initial={{ x:"0"}}
              animate={{x:"-100%"}}
              transition={{ repeat:Infinity,
               ease:"linear" ,duration:5}} 
              className='text-[10vw] leading-none font-semibold uppercase px-[2vw]'>
              we are ochi
              </motion.h1>
            <motion.h1 key="marquee 2" 
              initial={{ x:"0"}}
              animate={{x:"-100%"}}
              transition={{ repeat: Infinity ,ease:"linear"  ,duration:5}} 
              className='text-[10vw] leading-none font-semibold uppercase px-[2vw]'>
                we are ochi
            </motion.h1>
            <motion.h1 key="marquee 3" 
              initial={{ x:"0"}}
              animate={{x:"-100%"}}
              transition={{ repeat: Infinity ,ease:"linear"  ,duration:5}} 
              className='text-[10vw] leading-none font-semibold uppercase px-[2vw]'>
                we are ochi
            </motion.h1>
           
        </div>
    </div>
  )
}

export default Marquee