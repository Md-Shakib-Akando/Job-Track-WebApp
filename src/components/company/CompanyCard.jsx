
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const CompanyCard = ({singleData}) => {
    
    const cardRef = useRef();
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(cardRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
          },
        });
  
       
        
      }, );
  
      return () => ctx.revert();
    }, []);
    
    return (
        <>
            <Link ref={cardRef}  to={`/companyDetails/${singleData.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-md md:hover:shadow-xl transition-shadow duration-300 flex items-center justify-center cursor-pointer h-36 md:h-44">
                <div className="flex flex-col gap-3 items-center text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    <img className='w-8 h-8 md:w-12 md:h-12 ' src={singleData.logo} alt="" />
                    <span className="font-medium text-lg">{singleData.name}</span>
                </div>
            </Link>
        </>
    );
};

export default CompanyCard;