import React, { useEffect } from 'react';

import CompanyCard from '../components/company/CompanyCard';
import { useLoaderData } from 'react-router';

const Companies = () => {
    const data = useLoaderData();
    useEffect(()=>{
        document.title='JobTrack | Top-Companies';
    },[])
    return (
        <>
           <>
        <div className='text-center p-12'>
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