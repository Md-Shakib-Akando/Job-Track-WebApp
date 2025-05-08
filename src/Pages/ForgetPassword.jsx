import React, { useContext, useEffect, useState } from 'react';
import AuthImg from '../assets/AuthImg.jpg'
import { useLocation } from 'react-router';
import { valueContext } from '../RootLayout/RootLayout';
const ForgetPassword = () => {
    const {handleForgetPass}=useContext(valueContext);
    const location = useLocation();
    const [email, setEmail] = useState("");
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
          }
        document.title = 'JobTrack | Forgot-Password';
    }, [location.state]);
    return (
        <div className='min-h-screen  flex'>
            <div className="hidden  lg:block lg:w-1/2 relative">
                <img
                    src={AuthImg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/75 flex items-center justify-center">
                    <div className="text-white max-w-xl px-12">
                        <h1 className="text-4xl font-bold mb-6">Welcome to Job Track</h1>
                        <p className="text-xl">
                            Find your dream job and take the next step in your career
                            journey.
                        </p>
                    </div>
                </div>
            </div>


            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md mx-auto border border-gray-200 bg-white shadow-lg p-8 space-y-6 rounded-xl">
                    <h1 className="text-2xl font-bold text-center">Reset Password</h1>
                    <form className="space-y-4">
                        <div className="space-y-2 text-sm">
                            <label htmlFor="username" className="block font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                                required

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>


                        <button type='button' onClick={() => handleForgetPass(email)} className=" block w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                            Reset
                        </button>
                    </form>

                </div>
            </div>
        </div>





    );
};

export default ForgetPassword;