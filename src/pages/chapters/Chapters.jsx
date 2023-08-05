import React from 'react'
import { delay, motion } from 'framer-motion'
import '../chapters/tars-trans.gif'

function Chapters () {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: [0, 0.5, 1],
      scale: [1, 1.6, 1]
      // transition: {
      //   delayChildren: 3,
      //   staggerChildren: 2
      // }
    }
  }
  return (
    <div className=''>
      <h1 className=' m-8 font-bold text-[3.65rem] font-sans text-neutral-100'>
        Chapters
      </h1>
      <div className='flex justify-around '>
        <motion.div
          className='w-[12rem] h-[12rem] m-4 rounded-[14px] '
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <img src={require('../chapters/tars-trans.gif')} />
        </motion.div>
        <motion.div
          className='w-[12rem] h-[12rem] m-4 rounded-[14px] '
          variants={container}
          initial='hidden'
          animate='visible'
          transition={{delay : 0.5}}
        >
          <img src={require('../chapters/tars-trans.gif')} />
        </motion.div>
      </div>
      <div className='flex justify-around '>
        <motion.div
          className='w-[12rem] h-[12rem] m-4 rounded-[14px] '
          variants={container}
          initial='hidden'
          animate='visible'
          transition={{delay : 1}}
          
        >
          <img src={require('../chapters/tars-trans.gif')} />
        </motion.div>
        <motion.div
          className='w-[12rem] h-[12rem] m-4 rounded-[14px] '
          variants={container}
          initial='hidden'
          animate='visible'
          transition={{delay : 1.5}}
        >
          <img src={require('../chapters/tars-trans.gif')} />
        </motion.div>
      </div>
      <div className='flex justify-around '>
        <motion.div
          className='w-[12rem] h-[12rem] m-4 rounded-[14px] '
          variants={container}
          initial='hidden'
          animate='visible'
          transition={{delay : 2}}
        >
          <img src={require('../chapters/tars-trans.gif')} />
        </motion.div>
        <motion.div
          className='w-[12rem] h-[12rem] m-4 rounded-[14px] '
          variants={container}
          initial='hidden'
          animate='visible'
          transition={{delay : 2.5}}
        >
          <img src={require('../chapters/tars-trans.gif')} />
        </motion.div>
      </div>
      {/* <div className='flex justify-around '>
        <motion.div className='w-[12rem] h-[12rem] m-4 bg-slate-600 '></motion.div>
        <motion.div className='w-[12rem] h-[12rem] m-4 bg-slate-600 '></motion.div>
      </div> */}
    </div>
  )
}

export default Chapters
