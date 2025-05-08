import React from 'react';
import BannerImg from '../../assets/bannerImg.jpg'


const Banner = () => {

  
    return (
        <section className=" px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          
          <div className="w-full xl:w-2/5 mb-10 lg:mb-0  lg:pr-12">
            <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Find Your Dream Job With JobTrack
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Simplify your job search journey with our intelligent tracking
              system. Organize applications, schedule interviews, and land your
              perfect role faster.
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg">
                Get Started
              </button>
              <button className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 !rounded-button whitespace-nowrap cursor-pointer font-medium text-base transition-all duration-200 hover:bg-indigo-50">
                Learn More
              </button>
            </div>
          </div>

         
          <div className="w-full  xl:w-2/5 overflow-hidden rounded-xl shadow-xl">
            <img
              src={BannerImg}
              alt="Job tracking platform interface"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>
    );
};

export default Banner;