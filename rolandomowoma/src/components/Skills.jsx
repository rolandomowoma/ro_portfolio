import React from 'react'

import Html5  from '../assets/html.png'
import Css3  from '../assets/css.png'
import Tlwind from '../assets/tailwind.png'
import JS from '../assets/javascript.png'
import ES6 from '../assets/react.png'
import NodeJs from '../assets/node.png'
import Github from '../assets/github.png'
import Firebase from '../assets/firebase.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#142d53] text-gray-300'>
        {/* CONTAINER */}
        <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='text-center items-center mt-24 mb-[-24px]'>
                <p className='text-4xl font-bold inline border-b-4 border-lime-500'>Skills</p>
                <p className='py-8'>These are the technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={Html5} alt="HTML5 logo"/>
                    <p className='my-4'>HTML5</p>
                </div>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={Css3} alt="CSS3 logo"/>
                    <p className='my-4'>CSS3</p>
                </div>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="JavaScript logo"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={ES6} alt="React logo"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={Tlwind} alt="Tailwind CSS logo"/>
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={NodeJs} alt="NodeJS logo"/>
                    <p className='my-4'>NodeJs</p>
                </div>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="Firebase logo"/>
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#7f70ec] hover:scale-95 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="GitHub logo"/>
                    <p className='my-4'>GitHub</p>
                </div>
            </div>

        </div>
       
    </div>
  )
}

export default Skills