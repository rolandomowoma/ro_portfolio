import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#142d53] text-gray-300'>
        <div className='max-w-[800px] mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pl-8 pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-lime-500'>
                        About
                    </p>
                </div>
                <div> </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-2xl font-semibold'>
                    <p>Hi, I'm Roland, nice to meet you. Please, take a look around.</p>    
                </div>
                <div className='text-[1.2rem]'>
                    <p>I'm passionate about building software that meet the needs
                        of individuals and organizations of all categories.
                        I appreciate your visit here.
                    </p>    
                </div>                    
            </div>
        </div>
    </div>
  );
};

export default About