import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-20 bg-dark-100'
    >
      
      <div className='container mx-auto px-6'>
        
        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-purple-500'>Skills</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Technologies I work with to bring ideas to life
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          
          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-[#2d2d2d] border border-[#3a3a3a] rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer'
            >
              {/* Icon */}
              <div className='flex items-center text-purple-500 text-4xl mb-4'>
                <skill.icon  className='w-12 h-12 text-purple-500 mr-6'/>
              </div>

              {/* Title */}
              <h3 className='text-white text-lg font-semibold mb-2'>
                {skill.title}
              </h3>

              {/* Description */}
              <p className='text-white/70 text-sm mb-4'>
                {skill.description}
              </p>

              {/* Tags */}
              <div className='flex flex-wrap gap-2'>
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='text-xs px-3 py-1 bg-[#3a3a3a] rounded-full text-white font-semibold shadow-sm '
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

    </motion.div>
  )
}

export default Skills