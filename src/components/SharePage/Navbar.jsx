import React, { useContext,useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import GrozzieeLogo from "../../assets/Grozziie_logo.jpg"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div className="hover:cursor-pointer">
        <h1  onClick={handleNav} className={logo ? 'hidden' : 'block'}>Grozziie</h1>
        {/* <img className="w-32 h-8" src={GrozzieeLogo}></img> */}
      </div>
      <ul className='hidden md:flex'>
        <li><Link to='home' className="hover:cursor-pointer">Home</Link> </li>
        <li><Link to='refund' className="hover:cursor-pointer">Refund</Link> </li>
        <li><Link to='resend' className="hover:cursor-pointer">Resend</Link> </li>
        <li><Link to='supply' className="hover:cursor-pointer">Supply</Link> </li>
        <li><Link to='repair' className="hover:cursor-pointer">Repair</Link> </li>
        <li><Link to='about' className="hover:cursor-pointer">About</Link> </li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1 className="hover:cursor-pointer">Grozziie</h1>
          <li className='border-b hover:cursor-pointer'>Home</li>
          <li className='border-b hover:cursor-pointer'>Refund</li>
          <li className='border-b hover:cursor-pointer'>Resend</li>
          <li className='border-b hover:cursor-pointer'>Supply</li>
          <li className='border-b hover:cursor-pointer'>Repair</li>
          <li className='border-b hover:cursor-pointer'>About</li>
          <div className='flex flex-col '>
            <button className='hover:cursor-pointer font-semibold'>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
