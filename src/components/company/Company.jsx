import React from 'react';
import CompanyCard from './CompanyCard';

const Company = ({ data }) => {


    return (
        <>
        <div className='text-center py-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-3'>
            Top Companies Hiring
            </h2>
            <p>Discover opportunities from leading companies across various industries.</p>
        </div>
            <div className='w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 p-4'>
                {data.map((singleData) => (
                    <CompanyCard key={singleData.id} singleData={singleData} />
                ))}
            </div>
        </>
    );
};

export default Company;