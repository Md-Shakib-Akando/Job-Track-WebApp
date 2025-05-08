import React from 'react';

import { NavLink } from 'react-router';
const Footer = () => {
    return (
        <footer className=" bg-gray-300 rounded p-10">

            <div className='flex flex-col justify-center items-center gap-5'>
                <div className="flex items-center gap-2">
                    <img className='h-16 w-16 rounded-xl' src='/Job-Track logo.png' alt="" />

                </div>



                <nav className="flex justify-center items-center gap-8">
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
                    
                </nav>

                <aside>
                    <p className='text-gray-600'>Copyright © {new Date().getFullYear()} All Rights Reserved. </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;