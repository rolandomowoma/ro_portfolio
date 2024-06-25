import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/RO_Logo.jpg';


function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[120px] flex justify-between items-center px-6 bg-[#142d53] text-gray-300'>
      <div>
        <img src={Logo} alt="not found" style={{width:'60px'}}/>
      </div>
      {/* Menu */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* HamburgerMenu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#142d53] flex flex-col justify-center items-center'}>
          <li className='py-6 txt-4xl'>Home</li>
          <li className='py-6 txt-4xl'>About</li>
          <li className='py-6 txt-4xl'>Skills</li>
          <li className='py-6 txt-4xl'>Work</li>
          <li className='py-6 txt-4xl'>Contact</li>
        </ul>

      {/* Social Media-Icons */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          <li className='w-[120px] h-[30px] justify-between items-center ml-[-75px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Linkedin <FaLinkedin/>
            </a>
          </li>
          <li className='w-[120px] h-[30px] justify-between items-center ml-[-75px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              GitHub <FaGithub/>
            </a>
          </li>
          <li className='w-[120px] h-[30px] justify-between items-center ml-[-75px] hover:ml-[-10px] duration-300 bg-[#22a729]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail/>
            </a>
          </li>
          <li className='w-[120px] h-[30px] justify-between items-center ml-[-75px] hover:ml-[-10px] duration-300 bg-[#0a080896]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Resume <BsFillPersonLinesFill/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
