import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/RO_Logo.jpg';


function Navbar() {
  const [nav, setNav] = useState[false]
  const handleClick = () => setNav[!nav]

  return (
    <div className='fixed w-full h-[120px] flex justify-between items-center px-6 bg-[#142d53] text-gray-300'>
      <div>
        <img src={Logo} alt="not found" style={{width:'120px'}}/>
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
        <FaBars />
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
      <div className='hidden'></div>
    </div>
  )
}

export default Navbar