import React from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes,FaGithub,FaLinkedin } from "react-icons/fa";
import {BsPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="" style={{ width: "50px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Contact</li>
      </ul>

      {/* Hamnurger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-0 w-full h-screen flex md:hidden flex-col justify-center items-center bg-[#0a192f]"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skill</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                <a className="flex justify-between items-center w-full text-gray-300" href="/">Linkedin <FaLinkedin size='30px'/></a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                <a className="flex justify-between items-center w-full text-gray-300" href="/">Github <FaGithub size='30px'/></a>
            </li>
           
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e1a517]">
                <a className="flex justify-between items-center w-full text-gray-300" href="/">Gmail <HiOutlineMail size='30px'/></a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d45151]">
                <a className="flex justify-between items-center w-full text-gray-300" href="/">Resume <BsPersonLinesFill size='30px'/></a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
