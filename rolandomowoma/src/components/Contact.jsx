import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#142d53] flex justify-center items-center p-4 pt-16'>
        <form action="https://getform.io/f/akkggvoa" method="POST" className='max-w-[600px] w-full flex flex-col'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-lime-500 text-gray-200'>Contact Me</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-[#eef2ff] rounded-sm p-2'/>
            <input type="email" placeholder='Your Email' name='email' className='bg-[#eef2ff] rounded-sm my-4 p-2'/>
            <textarea name="message" rows="8" placeholder='Message' className='bg-[#eef2ff] rounded-sm p-2'></textarea>
            <button className=' text-white group border-2 py-3 my-2 flex justify-center items-center rounded-md hover:bg-lime-600 hover:border-lime-600 mx-[37%]'>Send Message</button>
        </form>

    </div>
  )
}

export default Contact