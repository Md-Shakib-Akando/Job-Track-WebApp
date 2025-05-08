import React, { useEffect, useRef } from 'react';
import { FaChartLine, FaHeartbeat, FaPalette } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const JobCategory = () => {
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();
  const cardRef4 = useRef();
  const textRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(cardRef1.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef1.current,
          start: 'top 80%',
        },
      });
      gsap.from(cardRef2.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef2.current,
          start: 'top 80%',
        },
      });
      gsap.from(cardRef3.current, {
        x: 100,
        opacity: 0,
        duration: 0.5,
       
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef3.current,
          start: 'top 80%',
        },
      });
      gsap.from(cardRef4.current, {
        x: 100,
        opacity: 0,
        duration: 0.5,
        
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef4.current,
          start: 'top 80%',
        },
      });
    },);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={textRef} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore Job Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find opportunities in your field of expertise from our
            comprehensive job categories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div ref={cardRef1} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
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

          <div ref={cardRef2} className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">

              <FaChartLine className='text-green-600 ' size={28}></FaChartLine>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Business</h3>
            <p className="text-gray-600">
              Marketing, sales, finance, management, and consulting.
            </p>
          </div>

          <div ref={cardRef3} className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">

              <FaPalette className='text-purple-600 ' size={28}></FaPalette>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Creative</h3>
            <p className="text-gray-600">
              Design, writing, media production, and artistic roles.
            </p>
          </div>

          <div ref={cardRef4} className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer">
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