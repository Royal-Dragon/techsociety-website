import React from 'react'
import data from '../../images'
import { useState,useEffect,useRef } from 'react'
import { motion } from 'framer-motion' 

function Chapters () {
  const [width,setWidth] = useState(0)
  const hori = useRef();
  useEffect(()=>{
    setWidth(hori.current.scrollWidth-hori.current.offsetWidth);
  },[])

    return (
    <div className='relative bg-[#08183a]'>
      <div className=''>
        <motion.div ref={hori} className='cursor-grab overflow-hidden'
          whileTap={{cursor:"grabbing"}} >
          <motion.div
          drag="x"
          dragConstraints={{right:0, left: -width}}
          className='p-4 flex '
          >
            {data.map((item) =>{
              return(
                <motion.div className='rounded-md m-4  bg-slate-600 justify-center min-h-fit   p-6 items-center min-w-[45vh]' key={item}>
                  <div className='flex justify-center p-10 min-w-full'>
                    <img className='w-1/2 ' alt='img' src={item.src}/>
                  </div>
                    <h2 className='font-bold text-xl mb-2'>{item.desc}</h2>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Website
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Chapters
