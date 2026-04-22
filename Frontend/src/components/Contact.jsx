
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();

   // ✅ VALIDATION
  if (!formData.name || !formData.email || !formData.message) {
    toast.error("Please fill all fields!");
    return;
  }

   setLoading(true);

  try {
    const res = await fetch("https://portfolio-backend-45p0.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message); // ✅ SUCCESS TOAST
    setFormData({ name: "", email: "", message: "" });
  } else {
      toast.error(data.error || "Something went wrong");
    }


  } catch (error) {
    toast.error("Server Error");
  }  finally {
    setLoading(false);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
        
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                 Get In  <span className='text-purple-500'> Touch</span>
            </h2>

            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
              Have a project in mind or want to collaborate? Let's talk !
            </p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* Contact Form */}
                <div>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                         <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                            <input 
                            className='w-full bg-[#2d2d2d] border border-[#3a3a3a] rounded-lg px-4 py-3 outline-none text-white'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                             />
                         </div>

                         <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>Email</label>
                            <input 
                            className='w-full bg-[#2d2d2d] border border-[#3a3a3a] rounded-lg px-4 py-3 outline-none text-white'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                             />
                         </div>

                         <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2'>Your Comment</label>
                            <textarea 
                            className='w-full h-40 bg-[#2d2d2d] border border-[#3a3a3a] rounded-lg px-4 py-3 outline-none text-white'
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                             />
                         </div>

                         <button type='submit' 
                         disabled={loading}
                         className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer disabled:opacity-50'>
                            {loading ? "Sending..." : "Send"} 
                         </button>

                     {/* Success Message */}
                         {/* {success && (
                    <p className='text-purple-500 mt-4 text-center font-medium'>
                       {success}
                             </p>
                        )} */}

                        {/* {success && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className='mt-4 px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500 text-purple-400 text-center font-medium'
  >
    {success}
  </motion.div>
)} */}


                    </form>
                </div>

                {/* Information */}

                <div className='space-y-8'>
                    <div className='flex items-start'>
                       <div className='text-purple-500 text-2xl mr-4'>
                        <FaMapMarkerAlt/>
                       </div>

                       <div>
                        <h3 className='text-lg font-semibold mb-2'>
                            Location
                        </h3>
                        <p className='text-gray-400'>
                            North Lakhimpur,Assam,787031
                        </p>
                       </div>
                    </div>

                    <div className='flex items-start'>
                       <div className='text-purple-500 text-2xl mr-4'>
                        <FaEnvelope/>
                       </div>

                       <div>
                        <h3 className='text-lg font-semibold mb-2'>
                            Email
                        </h3>
                        <p className='text-gray-400'>
                            sahidalam538@gmail.com 
                        </p>
                       </div>
                    </div>

                    <div className='flex items-start'>
                       <div className='text-purple-500 text-2xl mr-4'>
                        <FaPhone/>
                       </div>

                       <div>
                        <h3 className='text-lg font-semibold mb-2'>
                            Phone
                        </h3>
                        <p className='text-gray-400'>
                            +91 9101504697
                        </p>
                       </div>
                    </div>

                    <div className='pt-4'>
                          <h3 className='text-lg font-semibold mb-4'>
                            Follow Me
                          </h3>
                          <div className='flex space-x-4'>
                           <a href="https://github.com/sahidalam000" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-white-500 hover:bg-gray-400 hover:text-white transition duration-300'>
                            <FaGithub/>
                           </a>

                           <a href="https://www.linkedin.com/in/sahid-alam" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300'>
                            <FaLinkedin/>
                           </a>

                           <a href="https://x.com/SahidAlam67871" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                            <FaTwitter/>
                           </a>

                           <a href="https://dribbble.com/sahidalam538" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300'>
                            <FaDribbble/>
                           </a>
                          </div>
                    </div>

                </div>

            </div>

        </div>

    </motion.div>
  )
}

export default Contact
