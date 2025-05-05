import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
const LogIn = () => {
    return (
        <div className='pt-20 md:pt-40'>
            <div className="w-full max-w-md mx-auto border border-gray-200 bg-white shadow-lg p-8 space-y-6 rounded-xl">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate className="space-y-4">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <div className="flex justify-end text-xs text-blue-600">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                        Sign in
                    </button>
                </form>

                <div className="flex items-center pt-4 space-x-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm text-gray-500">Login with social accounts</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                    <NavLink>

                        <button aria-label="Login with Google" type="button" className="btn flex items-center justify-center w-full p-3  rounded-md focus:ring-2 focus:ring-offset-1">
                        <FcGoogle size={32} />
                            <p>Login with Google</p>
                        </button>

                    </NavLink>
                    <NavLink>
                    <button aria-label="Login with Google" type="button" className="btn   flex  w-full items-center justify-center p-3  rounded-md ">
                    <FaGithub size={32} />
                            <p>Login with Google</p>
                        </button>
                    </NavLink>

                </div>

                <div className="flex justify-center space-x-4">

                </div>

                <p className="text-sm text-center text-gray-600">Don't have an account?
                    <Link to='/register' className="text-blue-600 hover:underline ml-1">Sign up</Link>
                </p>
            </div>

        </div>
    );
};

export default LogIn;