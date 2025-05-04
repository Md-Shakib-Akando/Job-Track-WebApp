import React from 'react';
import BannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse  md:flex-row justify-between items-center gap-6 py-10  md:mt-12 '>
            <div className=''>
                <h1 className='text-2xl md:text-6xl text-center md:text-start font-bold'>Find Your Perfect <br className='md:hidden' /><span className='text-blue-600'>Career  Match</span></h1>
                <p className='text-sm  md:text-2xl text-gray-600 my-4 text-center md:text-start md:my-8'>Discover thousands of job opportunities from top <br /> companies and see if you match their requirements <br className='hidden md:flex' /> before applying.</p>
                <div className='flex justify-center md:justify-start items-center'>
                    <button className='btn btn-primary bg-blue-600 text-white hover:bg-white hover:text-blue-600 text-sm py-4 px-7 '>Explore Now</button>
                </div>
            </div>

            <div className="  md:mr-12 ">
                <img
                    className="w-52 h-52 md:w-[500px] md:h-[500px] object-cover  border-2 border-blue-300 pt-4 rounded-full shadow-xl shadow-blue-300 "
                    src={BannerImg}
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Banner;