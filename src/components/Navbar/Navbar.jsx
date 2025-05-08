import React, { useContext, useState } from 'react';
import { FaBars } from "react-icons/fa";
import logo from '/Job-Track logo.png'
import { GoX } from "react-icons/go";
import { NavLink } from 'react-router';
import { valueContext } from '../../RootLayout/RootLayout';
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const [menu,setMenu]=useState(false);
  const {user,handleSignOut}=useContext(valueContext);
  
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
     Top Companies
    </NavLink>
    
    <NavLink
      to='/faq'
      className="text-gray-600 text-lg hover:text-blue-600 transition-colors duration-200 cursor-pointer"
    >
     FAQ
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
        <img className='h-12 w-12 md:h-16 md:w-16 rounded-xl' src={logo} alt="" />
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>JOB TRACK</h2>
          </div>
          <nav className="flex items-center gap-4  md:gap-20">
            <div className="hidden lg:flex items-center space-x-8">

              {link}
              
            </div>
            <div className='flex gap-4'>
              {
                user?(<div className='flex gap-1'>
                  <NavLink to='/profile' >{
                  user.photoURL?<img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                />:<CgProfile size={32} />
                }</NavLink>  <div>
                  <button  onClick={handleSignOut} className='hidden lg:flex btn btn-outline btn-secondary w-full'>Log Out</button>
                </div>
                </div> ):(<>
               <div className='hidden lg:flex gap-4 '>
               <NavLink to='/login'>
              <button className="btn btn-soft btn-primary">SignIn</button>
              </NavLink>
              <NavLink to='/register'>
              <button className="btn btn-soft btn-primary">SignUp</button>
              </NavLink>
               </div>
                </>)
              }
            </div>


            <div className="dropdown lg:hidden flex justify-center items-center">
              <button onClick={toggleButton} className=" text-gray-500 focus:outline-none cursor-pointer">
                {menu?<GoX size={24} />:<FaBars />}
              </button>
              {
                menu&&(
                  <ul
                tabIndex={0}
                className="menu menu-sm text-center dropdown-content bg-base-100 rounded-box z-1 top-10 mt-3 w-44 -right-8  p-2 shadow">
                {link}
                {
                  user?( <button onClick={handleSignOut} className='btn btn-outline btn-secondary w-full'>Log Out</button>):(<>
                    <NavLink to='/login'>
                      <button className="btn btn-soft btn-primary my-3">SignIn</button>
                    </NavLink>
                    <NavLink to='/register'>
                      <button className="btn btn-soft btn-primary">SignUp</button>
                    </NavLink>
                  </>)
                }
               
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