import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mashiur Rahman</span>
            <span id="typewriter" className="inline-block overflow-hidden border-r-2 border-black"></span>, (Software Developer)


        </h1>
        
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in creating software applications, and love programming!
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            
            <a href = "https://www.linkedin.com/in/mashiurcs/overlay/about-this-profile/"><button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Linkedin</button> </a>
        </div>

    </div>
  )
}

export default Hero