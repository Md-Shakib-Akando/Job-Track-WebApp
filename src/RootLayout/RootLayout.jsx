import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const RootLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-10/12 mx-auto min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default RootLayout;