import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link

  const Navbar = () => {
    const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <Link to='/' className='w-full text-3xl font-bold text-[#00df9a]'>LEARNING PATH.</Link>
      <ul className='hidden md:flex'>
        <a href='/' className='p-7'>Home </a>
        <a href='/roadmaps' className='p-7'> Roadmaps </a>
        <a href='/about' className='p-7'>About </a>
        <a href='/contact' className='p-7'>Contact </a>
        <a href='/login'>
          <button className='bg-[#00df9a] w-[90px] h-[40px] rounded-md font-medium my-5 mx-auto py-2 text-black'>Login</button>
        </a>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <a className='w-full text-3xl font-bold text-[#00df9a] m-5'>LEARNING PATH.</a>
        <a className='  hover p-4 border-b border-gray-600'>Home</a>
        <a className='p-4 border-b border-gray-600'>Roadmaps</a>
        <a className='p-4 border-b border-gray-600'>About</a>
        <a className='p-4 border-b border-gray-600'>Contact</a>
        <a className='p-4'>Contact</a>
      </ul>
    </div>
  ); 
  }

export default Navbar

