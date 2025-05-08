import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { valueContext } from '../RootLayout/RootLayout';
import AuthImg from '../assets/AuthImg.jpg'

const Register = () => {
    
    const {handleRegister,handleGoogleSignIn}=useContext( valueContext )
    const [error,setError]=useState();
    const handleSignUp=(e)=>{
        e.preventDefault();

        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        setError('');

        const Upass = /[A-Z]/.test(password);
        const Lpass = /[a-z]/.test(password);
        const Length = password.length >= 6;
        if(!Upass){
            setError("At least one Uppercase letter!");
            return;
        }
        if(!Lpass){
            setError("At least one Lowercase letter!");
            return;
        }
        if(!Length){
            setError('at least 6 characters password! ')
            return;
        }

        handleRegister(email,password,name,photo)
       
    }
    useEffect(()=>{
                document.title='JobTrack | Register';
            },[])
    return (


        <div className='min-h-screen flex'>
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

        <div className='w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50'>
            <div className="w-full max-w-md mx-auto border border-gray-200 bg-white shadow-lg p-8 space-y-6 rounded-xl">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Full Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="photo" className="block font-medium text-gray-700">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            required
                            placeholder="Photo URL"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="space-y-2 text-sm">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    {
                        error&&<p className='text-sm text-red-500'>{error}</p>
                    }
                    <button type='submit' className="block w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                        Register
                    </button>
                </form>

                <div className="flex items-center pt-4 space-x-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm text-gray-500">Or register with</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className='flex justify-center'>
                    <NavLink>
                        <button
                            onClick={handleGoogleSignIn}
                            aria-label="Register with Google"
                            type="button"
                            className="btn flex items-center gap-2 w-full justify-center p-3 rounded-md"
                        >
                            <FcGoogle size={28} />
                            <span>Register with Google</span>
                        </button>
                    </NavLink>
                </div>

                <p className="text-sm text-center text-gray-600">Already have an account?
                    <Link to='/login' className="text-blue-600 hover:underline ml-1">Login</Link>
                </p>
            </div>
        </div>
        </div>

    );
};

export default Register;