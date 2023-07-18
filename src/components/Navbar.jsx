import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
             <a href='#_'h1 className='w-full text-3xl font-bold text-[#00df9a]'>LEARNING PATH.</a>
            <ul className='hidden md:flex'>
            <a href='#_' className='p-7'>Home </a>
            <a href='#_' className='p-7'> Roadmaps  </a>
            <a href='#_' className='p-7'>About </a>
            <a href='#_' className='p-7'>Contact  </a>
            <button href='#_' className=' bg-[#00df9a] w-[90px] h-[40px] rounded-md font-medium my-5 mx-auto py-2 text-black'> login </button>
            </ul> 

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='w-full text-3xl font-bold text-[#00df9a] m-5'>LEARNING PATH.</li>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Roadmaps</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
          <li className='p-4'>Contact</li>
      </ul>
        
    </div>
    );
  }

export default Navbar

