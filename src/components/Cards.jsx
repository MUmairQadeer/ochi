import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 items-center px-20 bg-zinc-100'>
        <div className='cardcontainer h-[50vh] w-1/2'>
          <div className='card rounded-xl relative w-full h-full flex items-center justify-center bg-[#004D43]'>
              <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                  <button className='absolute px-5 py-1 rounded-full left-10 bottom-10  border-2 '>&copy; 2024-2026 Ochi</button>
          </div>
        </div>
        
          <div className='card relative  h-[50vh] flex items-center justify-center rounded-xl w-1/2  bg-zinc-700'>
              <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute  w-[14vw] rounded-full left-10 bottom-10      border-2 '>RATING 5.0 CLUTCH </button>
          </div>
          <div className='card relative h-[50vh] flex items-center justify-center rounded-xl w-1/2  bg-zinc-700'>
              <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute w-[20vw] tracking-tighter rounded-full left-10 bottom-10      border-2 '>BUSINESS BOOTCHAMP ALLUMNI</button>
          </div>
        
    


    </div>
  )
}

export default Cards