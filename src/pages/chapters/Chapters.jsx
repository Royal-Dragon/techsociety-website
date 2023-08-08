import React from 'react'
import data from '../../images'
import { useState,useEffect,useRef } from 'react'
import { AnimatePresence, delay, motion } from 'framer-motion' 
import WaterDropGrid from '../../components/WaterDrop'

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
                <motion.div className='rounded-md m-4  bg-slate-600 justify-center h-fit p-5 items-center min-w-[45vh]' key={item}>
                  <div className='flex justify-center p-10 min-w-full'>
                    <img className='w-1/2 ' src={item.src}/>
                  </div>
                    <h2 className='font-bold text-xl mb-2'>{item.desc}</h2>
                    <p class="text-gray-50 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
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
