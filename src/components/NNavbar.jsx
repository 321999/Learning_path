import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <Link to='/' className='text-3xl font-bold text-[#00df9a]'>LEARNING PATH.</Link>
      
      <ul className='hidden md:flex space-x-7'>
        <NavItem to='/Home'>Home</NavItem>
        <NavItem to='/roadmaps'>Roadmaps</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/contact'>Contact</NavItem>
        <a href='/login'>
          <button className='bg-[#00df9a] w-[90px] h-[40px] rounded-md font-medium my-5 mx-auto py-2 text-black'>
            Login
          </button>
        </a>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      
      <MobileNavMenu nav={nav} />
    </nav>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className='p-7'>{children}</Link>
    </li>
  );
};

const MobileNavMenu = ({ nav }) => {
  return (
    <ul className={`transition-transform fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
      <a className='text-3xl font-bold text-[#00df9a] m-5'>LEARNING PATH.</a>
      <NavItem to='/Home'>Home</NavItem>
      <NavItem to='/roadmaps'>Roadmaps</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/contact'>Contact</NavItem>
    </ul>
  );
};

export default NNavbar;
