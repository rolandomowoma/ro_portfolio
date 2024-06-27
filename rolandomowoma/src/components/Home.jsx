import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='bg-[#142d53] w-full h-screen'>

        {/* Intro session */}
        <div className='max-w-[1000px] mx-auto pt-28 px-6 flex flex-col h-[100%] justify-center'>
          <p className='text-orange-200'>Hi, my name is</p>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#d7dfdd]'>Roland Omowoma</h2>
          <h3 className='text-3xl sm:text-6xl font-semi-bold text-[#969bad]'>I'm a Full-Stack Developer.</h3>
          <p className='text-lime-500'>I build user-friendly and responsive web applications to specifications.</p>
          <br/><p className='text-orange-200'>Contact me through any combination of these channels for that online presence you deserve.</p>
          <div>
            <button className='text-white group border-2 px-4 py-3 my-2 flex items-center rounded-md hover:bg-lime-600 hover:border-lime-600'>View Works 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-5'/>
              </span>
            </button>
          </div>
          <div className='mx-[25%] mb-[-12] pt-4 px-12 py-2 bg-[#df8723c0] h-[80px]'> 
            <p className='text-[#d2cdec] pt-2'>To register for hands-on training in web development and other courses <a href='/' className='text-lime-400' >click here</a>..</p>
          </div> 
        </div>    
    </div>
  )
}

export default Home