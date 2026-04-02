import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='experience'
      className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'> 
            <h2 className='text-3xl font-bold text-center mb-4'>
                Work <span className='text-purple-500'> Experience</span>
            </h2>

            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                I have gained valuable experience in the field of software development.
            </p>

            <div className='max-w-3xl mx-auto '>
                <div className='space-y-12'>
               {
                workData.map((data, index) => (
                    <div key={index} className= "relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-purple-500 cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
                        {/* timeline */}
                        <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple-500'>

                        </div>


                        {/* box */}
                        {/* box */}
<div className='bg-[#2d2d2d] border border-[#3a3a3a] rounded-2xl p-6'>
  
  {/* Top Row */}
  <div className='flex items-center mb-3'>
    
    <h3 className='text-xl font-semibold text-white'>
      {data.role}
    </h3>

    <span className='ml-auto px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm whitespace-nowrap'>
      {data.duration}
    </span>

  </div>

  {/* Company */}
  <p className='text-gray-400 mb-2'>
    {data.company}
  </p>

  {/* Description */}
  <p className='text-gray-300'>
    {data.description}
  </p>

</div>

                    
                    </div>
                ))
               }
                </div>
            </div>
        </div>
       
    </motion.div>
  )
}

export default Work
