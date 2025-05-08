import React, { useEffect, useRef } from 'react';

import CompanyCard from '../components/company/CompanyCard';
import { useLoaderData } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Companies = () => {
    const data = useLoaderData();
    const textRef = useRef();
    useEffect(()=>{
        document.title='JobTrack | Top-Companies';

        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
              y: -100,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
              },
            });
      
           
            
          }, );
      
          return () => ctx.revert();

    },[])

    return (
        <>
           <>
        <div ref={textRef} className='text-center p-12'>
            <h2 className='text-2xl md:text-3xl font-bold mb-3'>
            Top Companies Hiring
            </h2>
            <p>Discover opportunities from leading companies across various industries.</p>
        </div>
            <div className='w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 p-4 mb-9'>
                {data.map((singleData) => (
                   <CompanyCard key={singleData.id} singleData={singleData} />
                   
                ))}
            </div>
        </>
        </>
    );
};

export default Companies;