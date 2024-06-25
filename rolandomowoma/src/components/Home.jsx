import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='bg-[#142d53] w-full h-screen'>

        {/* Intro session */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-[100%] justify-center'>
            <p className='text-orange-200'>Hi, my name is</p>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#d7dfdd]'>Roland Omowoma</h2>
            <h3 className='text-3xl sm:text-6xl font-semi-bold text-[#969bad]'>I'm a Full-Stack Developer.</h3>
            <p className='text-lime-500'>I build user-friendly and responsive web applications to specifications.</p>
            <p className='text-orange-200'>Contact me through any combination of these channels for that online presence you deserve.</p>
            <div>
                <button className='text-white border-2 px-4 py-3 my-2 flex items-center'>View Works <HiArrowNarrowRight/></button>
            </div>
        </div>
        <div className='max-w-[1000px] mx-auto px-9 flex flex-col h-[0.01%] justify-center'>
            <h2>Register for Hands-on Training</h2>
            <p>If you are interestd in training for web development and other courses</p>
            <div>
                <button className='text-gray-600 border-2 px-4 py-3 my-2 flex items-center'>Click Here</button>
            </div>
        </div>
    
    </div>
  )
}

export default Home