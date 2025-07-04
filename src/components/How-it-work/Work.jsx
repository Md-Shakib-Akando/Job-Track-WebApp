
import React, { useEffect, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Work = () => {

  const textRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

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

      gsap.from(textRef1.current, {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef1.current,
          start: 'top 80%',
        },
      });
      gsap.from(textRef2.current, {
        x: -300,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef2.current,
          start: 'top 80%',
        },
      });
      gsap.from(textRef3.current, {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef3.current,
          start: 'top 80%',
        },
      });
    }, );

    return () => ctx.revert();
  }, []);


    
    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-6" >
          <div ref={textRef} className="text-center mb-16" >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Job Track Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" >
              Our platform simplifies your job search with a streamlined process
              that helps you find and apply to the right opportunities.
            </p>
          </div>

          <div className="relative">
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>

            
            <div className="relative mb-8 md:mb-0" >
              <div ref={textRef1} className="flex flex-col md:flex-row items-center">
                <div  className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl text-center md:text-end font-bold text-gray-800 mb-3">
                    Go to the Companies
                  </h3>
                  <p className="text-gray-600 text-center md:text-end">
                    Browse through thousands of job listings from top companies
                    across various industries and locations.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10 relative shadow-md">
                    <IoSearch size={32} className='text-bold text-white' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="relative mb-8 md:mb-0 md:mt-24" >
              <div ref={textRef2} className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex justify-center md:justify-end order-1">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10 relative shadow-md">
                    <FaClipboardCheck size={32} className='text-bold text-white' />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0 md:text-left order-2">
                  <h3 className="text-xl text-center md:text-start font-bold text-gray-800 mb-3">
                    Check Your Match
                  </h3>
                  <p className="text-gray-600 text-center md:text-start">
                    See how well your skills and experience align with job
                    requirements before you apply.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="relative md:mt-24" >
              <div ref={textRef3} className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-xl text-center md:text-end font-bold text-gray-800 mb-3" >
                    Apply with Confidence
                  </h3>
                  <p className="text-gray-600 text-center md:text-end">
                    Submit your application directly through our platform and
                    track your application status.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10 relative shadow-md">
                    <LuLaptopMinimalCheck size={32} className='text-bold text-white' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Work;