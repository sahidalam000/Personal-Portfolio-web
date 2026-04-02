import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     whileInView={{opacity:1, y:0}}
     transition={{duration: 0.6, ease: 'easeOut'}}
     viewport={{once: true}}
     id='about'
     className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>About
            <span className='text-purple-500'> Me</span>
        </h2>
        <p className='text-gray-400 text-center mx-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
      
         {/* image + my journey */}
         <div className='flex flex-col md:flex-row items-center gap-12'>
           {/* image */}
           <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img 
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.9, ease: 'easeOut'}}
            viewport={{once: false, amount: 0.2}}
            className='w-full h-full object-cover'
            src={assets.sahidbhaiImg} alt="Profile" />
           </div>

           
              {/* my journey */}

            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.9, ease: 'easeOut'}}
            viewport={{once: false, amount: 0.2}}
            className='md:w-1/2'
            >
               <div className='rounded-2xl p-8'>
                 <h3 className='text-2xl font-semibold mb-6'>
                    My Journey
                 </h3>
                 <p className='text-gray-300 mb-6'>
                  I'm a passionate and dedicated Computer Science graduate with a strong foundation in full-stack web development, focused on building scalable, user-friendly, and impactful digital solutions.
                  I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have hands-on experience developing full-stack applications, including real-world projects . 
                 </p>

                 <p className='text-gray-300 mb-12'>
                     Outside of coding, I have a creative side—I enjoy music, content creation, and sharing my work online, which helps me maintain a balanced and innovative mindset.
                 </p>

                 {/* Cards  */}

                  <div  className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        aboutInfo.map((data, index) => (
                            <div key={index} className='bg-[#2d2d2d] border border-[#3a3a3a] rounded-2xl p-6 transition duration-300 hover:-translate-y-2 cursor-pointer'>
                              <div className='text-purple-500 text-4xl mb-4'>
                                 <data.icon/>
                              </div>
                              <h3 className='text-white text-lg font-semibold mb-2'>{data.title}</h3>
                              <p className='text-white/70 text-sm'>{data.description}</p>
                            </div>

                        ))
                    }
                  </div>
               </div>
            </motion.div>

         </div>

         {/* ✅ Education Section (TIMELINE STYLE) */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: 'easeOut' }}
  viewport={{ once: false, amount: 0.2 }}
  className='mt-20'
>
  <h3 className='text-2xl font-semibold text-center mb-12'>
    My <span className='text-purple-500'>Education</span>
  </h3>

  <div className='relative max-w-3xl mx-auto'>
    
    {/* Vertical Line */}
    <div className='absolute left-4 top-0 h-full w-[2px] bg-[#3a3a3a]'></div>

    <div className='space-y-10'>

      {/* Graduation */}
      <div className='relative pl-12'>
        <div className='absolute left-2 top-2 w-4 h-4 bg-purple-500 rounded-full'></div>

        <div className='bg-[#2d2d2d] border border-[#3a3a3a] rounded-2xl p-6 transition duration-300 hover:-translate-y-1'>
          
          <div className='flex items-center mb-2'>
            <h4 className='text-white text-lg font-semibold'>
              B.Tech in Computer Science & Engineering
            </h4>

            <span className='ml-auto px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm whitespace-nowrap'>
              2021 - 2025
            </span>
          </div>

          <p className='text-white/70 text-sm'>
            Assam Downtown University, Guwahati, Assam
          </p>

          <p className='text-white/60 text-sm mt-1'>
            CGPA: <span className='font-semibold text-white'>7.5</span>
          </p>

        </div>
      </div>

      {/* 12th */}
      <div className='relative pl-12'>
        <div className='absolute left-2 top-2 w-4 h-4 bg-purple-500 rounded-full'></div>

        <div className='bg-[#2d2d2d] border border-[#3a3a3a] rounded-2xl p-6 transition duration-300 hover:-translate-y-1'>
          
          <div className='flex items-center mb-2'>
            <h4 className='text-white text-lg font-semibold'>
              Higher Secondary with Science Stream (12th)
            </h4>

            <span className='ml-auto px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm whitespace-nowrap'>
              2020
            </span>
          </div>

          <p className='text-white/70 text-sm'>
            North Lakhimpur University, Lakhimpur, Assam
          </p>

          <p className='text-white/60 text-sm mt-1'>
            Percentage: <span className='font-semibold text-white'>70%</span>
          </p>

        </div>
      </div>

      {/* 10th */}
      <div className='relative pl-12'>
        <div className='absolute left-2 top-2 w-4 h-4 bg-purple-500 rounded-full'></div>

        <div className='bg-[#2d2d2d] border border-[#3a3a3a] rounded-2xl p-6 transition duration-300 hover:-translate-y-1'>
          
          <div className='flex items-center mb-2'>
            <h4 className='text-white text-lg font-semibold'>
              Secondary (10th)
            </h4>

            <span className='ml-auto px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm whitespace-nowrap'>
              2018
            </span>
          </div>

          <p className='text-white/70 text-sm'>
            Sankardev Sishu Niketan, Lakhimpur, Assam
          </p>

          <p className='text-white/60 text-sm mt-1'>
            Percentage: <span className='font-semibold text-white'>84%</span>
          </p>

        </div>
      </div>

    </div>
  </div>
</motion.div>

      </div>

       


    </motion.div>
  )
}

export default About
