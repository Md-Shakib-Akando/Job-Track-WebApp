import React from 'react';
import { FaStar } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
const Success = () => {
    return (
        <>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Success Stories
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Hear from job seekers who found their perfect career match through
                    Job Track.
                </p>
            </div>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <div className="bg-white max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit text-center">
                        <div className="flex flex-col md:flex-row justify-center items-center mb-6 text-center">

                            <div>
                                <div className='flex gap-2 items-center'>
                                    <BsPersonCircle size={28} />
                                    <h4 className="text-lg font-bold text-gray-800">
                                        Andrew Blake
                                    </h4>
                                </div>

                                <p className="text-gray-600">
                                    Full-Stack Developer at Samsung
                                </p>
                            </div>
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">
                            "After struggling for months to find the right opportunities, I discovered Job Track—and everything changed. Within just a few days of signing up, I started landing interviews with top-tier companies in my field. The platform's intuitive interface made job searching less overwhelming, and the job recommendations were incredibly accurate and relevant to my experience. I especially appreciated the ability to track applications, research companies, and customize my search effortlessly. Thanks to Job Track, I finally feel confident and in control of my career path. I can’t recommend it enough to anyone looking to level up their job search!"
                        </blockquote>
                        <div className="flex justify-center items-center gap-2 text-yellow-400">
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="bg-white max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit text-center">
                        <div className="flex flex-col md:flex-row justify-center items-center mb-6 text-center">

                            <div>
                                <div className='flex gap-2 items-center'>
                                    <BsPersonCircle size={28} />
                                    <h4 className="text-lg font-bold text-gray-800">
                                        Sarah Johnson
                                    </h4>
                                </div>

                                <p className="text-gray-600">
                                    Software Engineer at Google
                                </p>
                            </div>
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">
                            “Job Track helped me land my dream job in just two weeks! The platform’s user-friendly interface and powerful filters made it incredibly easy to find opportunities that perfectly matched my skills, experience, and interests. I was able to discover roles I wouldn't have found elsewhere, and the detailed company insights helped me apply with confidence. Thanks to Job Track, I’m now working at a company I love, doing work that excites me every day. I highly recommend it to anyone serious about their career growth!”
                        </blockquote>
                        <div className="flex justify-center items-center gap-2 text-yellow-400">
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="bg-white max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit text-center">
                        <div className="flex flex-col md:flex-row justify-center items-center mb-6 text-center">

                            <div>
                                <div className='flex gap-2 items-center'>
                                    <BsPersonCircle size={28} />
                                    <h4 className="text-lg font-bold text-gray-800">
                                        Michael Chen
                                    </h4>
                                </div>

                                <p className="text-gray-600">
                                    UX Designer at Amazon
                                </p>
                            </div>
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">
                            “Job Track helped me land my dream job in just two weeks! The platform’s user-friendly interface and powerful filters made it incredibly easy to find opportunities that perfectly matched my skills, experience, and interests. I was able to discover roles I wouldn't have found elsewhere, and the detailed company insights helped me apply with confidence. Thanks to Job Track, I’m now working at a company I love, doing work that excites me every day. I highly recommend it to anyone serious about their career growth!”

                        </blockquote>
                        <div className="flex justify-center items-center gap-2 text-yellow-400">
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="bg-white max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit text-center">
                        <div className="flex flex-col md:flex-row justify-center items-center mb-6 text-center">

                            <div>
                                <div className='flex gap-2 items-center'>
                                    <BsPersonCircle size={28} />
                                    <h4 className="text-lg font-bold text-gray-800">
                                        Emily Rodriguez
                                    </h4>
                                </div>

                                <p className="text-gray-600">
                                    Software Engineer at Netflix
                                </p>
                            </div>
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">
                            "Job Track completely streamlined my job search and made the process so much more efficient. I loved how clearly each job listed the requirements and whether I matched them—it saved me hours of time by helping me focus only on roles that were truly relevant to my skills and experience. The smart filtering, personalized recommendations, and real-time application tracking gave me an edge and kept me organized throughout the search. What used to feel stressful became a structured, empowering experience. Job Track isn’t just a job board—it’s a smarter way to build your career."
                        </blockquote>
                        <div className="flex justify-center items-center gap-2 text-yellow-400">
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                            <FaStar size={24} />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Success;