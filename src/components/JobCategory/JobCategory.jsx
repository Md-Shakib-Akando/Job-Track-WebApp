import React from 'react';
import { FaChartLine, FaHeartbeat, FaPalette } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';

const JobCategory = () => {
    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Job Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find opportunities in your field of expertise from our
              comprehensive job categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                
                <FaLaptopCode className='text-blue-600' size={28}></FaLaptopCode>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Technology
              </h3>
              <p className="text-gray-600">
                Software engineering, data science, IT support, and more.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                
                <FaChartLine className='text-green-600 ' size={28}></FaChartLine>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Business</h3>
              <p className="text-gray-600">
                Marketing, sales, finance, management, and consulting.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                
                <FaPalette className='text-purple-600 ' size={28}></FaPalette>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Creative</h3>
              <p className="text-gray-600">
                Design, writing, media production, and artistic roles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
               
                <FaHeartbeat className='text-red-600' size={28}></FaHeartbeat>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Healthcare
              </h3>
              <p className="text-gray-600">
                Medical, nursing, mental health, and wellness positions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default JobCategory;