import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import Logo from '../../assets/Job-Track logo.png'
import { GoX } from "react-icons/go";
import { NavLink } from 'react-router';
const Navbar = () => {
  const [menu,setMenu]=useState(false)
  const link = <>

    <NavLink
      to='/'
      className="text-gray-600 text-lg hover:text-blue-600 transition-colors duration-200 cursor-pointer"
    >
      Home
    </NavLink>
    <NavLink
      to='/companies'
      className="text-gray-600 text-lg hover:text-blue-600 transition-colors duration-200 cursor-pointer"
    >
      Companies
    </NavLink>

    
  </>

  const toggleButton=()=>{
    setMenu(!menu)
  }
  return (
    <div className="  bg-gray-50 font-sans">

      <header className=" sticky top-0 z-50 bg-white shadow-sm">
        <div className=" w-10/12 mx-auto py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className='h-16 w-16 rounded-xl' src={Logo} alt="" />
            <h2 className='text-2xl md:text-4xl font-bold'>JOB TRACK</h2>
          </div>
          <nav className="flex items-center  space-x-4">
            <div className="hidden md:flex items-center space-x-8">

              {link}
              
            </div>
            <div className='flex gap-4'>
              <NavLink>
              <button className="btn btn-soft btn-primary">SignIn</button>
              </NavLink>
              <NavLink>
              <button className="btn btn-soft btn-primary">SignUp</button>
              </NavLink>
            </div>


            <div className="dropdown md:hidden flex justify-center items-center">
              <button onClick={toggleButton} className=" text-gray-500 focus:outline-none cursor-pointer">
                {menu?<GoX size={24} />:<FaBars />}
              </button>
              {
                menu&&(
                  <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 top-10 mt-3 w-28  p-2 shadow">
                {link}
              </ul>
                )
              }
            </div>
          </nav>


        </div>
      </header>
    </div>
  );
};

export default Navbar;