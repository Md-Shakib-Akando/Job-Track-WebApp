import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CompanyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    useEffect(() => {
                document.title = 'JobTrack | CompanyDetails';
              }, []);
    const Details = data.find((singleData) => singleData.id === id);
    
    const { name, logo, about, companySize, industry, location } = Details
    return (
        <>
            <section className="py-20 bg-gray-90">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                        <div className="flex items-center mb-6">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
                                <img className='p-5' src={logo} alt="" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                    {name}
                                </h1>
                                <p className="text-gray-600 text-lg">
                                    {location}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">Industry</h3>
                                <p className="text-gray-600">{industry}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    Company Size
                                </h3>
                                <p className="text-gray-600">{companySize}</p>
                            </div>

                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-4">
                                About Company
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {about}
                            </p>
                        </div>
                    </div>
                </div>




                <h2 className="text-2xl font-bold text-center mb-6">Available Positions</h2>
                <div className="space-y-6 w-[79%] mx-auto">
                    {
                        Details.jobs.map((singleJob, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                            {singleJob.title}
                                        </h3>
                                        <p className="text-gray-600 mb-2">{singleJob.location}</p>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 px-1 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                       {singleJob.jobType}
                                    </span>
                                </div>
                                <p className="text-gray-700 font-medium mb-4">
                                    Salary Range: {singleJob.salary}
                                </p>
                                <button
                                    
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    View Details
                                </button>
                            </div>
                        ))
                    }
                </div>


            </section>
        </>
    );
};

export default CompanyDetails;