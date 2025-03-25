import { motion } from 'framer-motion'
import React from 'react'
// import { FaArrowUpLong } from 'react-icons/fa'
function LandingPage() {
  
  return (
    <div className='w-full h-screen  bg-zinc-900 pt-1'>
        <div className="textstructure mt-32 px-10  ">
         {["we create" ,"eye-opening" ,"presentations"].map((item, index) => 
         {
            return   <div key ={index} className="masker">
               <div className="w-fit flex ">
                {index === 1 && 
                <motion.div 
                  initial={{width:0}}
                   animate={{width:"7vw"}} 
                   transition={{ease:[0.45, 0, 0.55, 1], duration:1}}
                    className='w-[7vw] h-[4vw] relative top-[1vw] '>
                      <img  className="w-full h-full tracking-tighter"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>}
               <h1 key={index} className='uppercase text-[6vw] leading-[5vw] 
                font-bold '>
                   {item}
                </h1>
               </div>
            </div>
          }
        )}
          
        </div>
        <div className="border-t-2 border-zinc-800 mt-[20vw] flex justify-between py-5 px-20">
          {["For Public and private Companies","Form the first pitch to IPO"].map((item,index) => (<p key={index} className='text-md font-light tracking-tight leading-none '>
            {item}
          </p>)

          )}
           <div className="start px-4 py-2 border-[2px] uppercase border-zinc-500 rounded-full
           text-sm capatilize font-light">
          start the project
        </div>

        {/* <div className="w-10 h-10 flex items-center justify-center border-[2px]">
          <FaArrowUpLong />
        </div> */}
        </div>
       
        </div>
  )
}

export default LandingPage