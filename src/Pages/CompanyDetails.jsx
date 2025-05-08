import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const CompanyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [selectedJob, setSelectedJob] = useState(null);
    useEffect(() => {
        document.title = 'JobTrack | CompanyDetails';
    }, []);
    const cardRef = useRef();
    const slideRef = useRef();
    const textRef = useRef();
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(textRef.current, {
          scaleY:2,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        });
        gsap.from(cardRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
          },
        });
        gsap.from(slideRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay:0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: slideRef.current,
            start: 'top 80%',
          },
        });
  
       
        
      }, );
  
      return () => ctx.revert();
    }, []);
    const Details = data.find((singleData) => singleData.id === id);

    const { name, logo, about, companySize, industry, location,website } = Details
    return (
        <>
            <section className="py-20 bg-gray-90">
                <div className="container mx-auto px-6">
                    <div ref={cardRef} className="bg-white rounded-xl shadow-lg p-8 mb-12">
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




                <h2 ref={textRef} className="text-2xl md:text-4xl font-bold text-center my-6">Available Positions</h2>
                <div ref={slideRef} className="space-y-6 w-[79%] mx-auto">
                    {Details.jobs.map((singleJob) => (
                        <div key={singleJob.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{singleJob.title}</h3>
                                    <p className="text-gray-600 mb-2">{singleJob.location}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 px-1 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                    {singleJob.jobType}
                                </span>
                            </div>
                            <p className="text-gray-700 font-medium mb-4">Salary Range: {singleJob.salary}</p>
                            <button
                                onClick={() => setSelectedJob(singleJob)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>


                {selectedJob && (
                    <div className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center">
                        <div className="bg-white rounded-xl shadow-2xl w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedJob.title}</h3>
                                        <p className="text-gray-600">{selectedJob.location}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedJob(null)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-2xl"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h4>
                                        <p className="text-gray-600 whitespace-pre-line">{selectedJob.description}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Job Type</h4>
                                        <p className="text-gray-600 whitespace-pre-line">{selectedJob.jobType}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Salary</h4>
                                        <p className="text-gray-600 whitespace-pre-line">{selectedJob.salary}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Requirements</h4>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            {selectedJob.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-end pt-6">
                                        <Link
                                           to={website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                                        >
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default CompanyDetails;