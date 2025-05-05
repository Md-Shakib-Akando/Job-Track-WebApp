import React from 'react';
import { Link } from 'react-router';

const CompanyCard = ({singleData}) => {
    return (
        <>
            <Link to={`/companyDetails/${singleData.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-md md:hover:shadow-xl transition-shadow duration-300 flex items-center justify-center cursor-pointer h-36 md:h-44">
                <div className="flex flex-col gap-3 items-center text-gray-400 hover:text-blue-600 transition-colors duration-300">
                    <img className='w-8 h-8 md:w-12 md:h-12 ' src={singleData.logo} alt="" />
                    <span className="font-medium text-lg">{singleData.name}</span>
                </div>
            </Link>
        </>
    );
};

export default CompanyCard;