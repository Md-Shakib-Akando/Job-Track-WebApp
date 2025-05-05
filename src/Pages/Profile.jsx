import React, { useContext, useRef, useState } from 'react';
import { valueContext } from '../RootLayout/RootLayout';
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
    const { handleSignOut, user ,setUser} = useContext(valueContext)
    const [updatePro,setUpdateProfile]=useState(false)
    const nameRef = useRef();
   const photoRef = useRef()
   
    const handleLogOut = () => {
        handleSignOut();
    }
    const toggleUpdateProfile=()=>{
        setUpdateProfile(!updatePro);
    }
    const handleUpdateProfile=(e)=>{
        e.preventDefault();
        const updatedName = nameRef.current.value;
        const updatedPhoto = photoRef.current.value;

        updateProfile(user,{displayName:updatedName,photoURL:updatedPhoto})
                    .then(() => {
                        setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto });
                        toast.success("Sign Up Successfully Done");
                      
                    })
                    .catch(error => {
                        toast.error(error.message);
                    });
    }
    return (
        <>
            <div className='flex justify-center items-center my-32 '>
                {
                    user ? <>
                        <div className=' p-4 md:p-8 border border-gray-300 shadow-xl rounded-2xl'>
                            <div>
                                <img className='h-70 w-70' src={user.photoURL} alt="" />
                            </div>
                            <div>
                                <h1 className='mt-5'><span className='text-lg font-bold'>User Name: </span> {user.displayName}</h1>
                                <p className='my-2'><span className='text-lg font-bold'>UID : </span> {user.uid}</p>
                                <p className='mb-7'><span className='text-lg font-bold'>Email: </span> {user.email}</p>

                            </div>
                            <div>
                            <button onClick={toggleUpdateProfile} className='btn btn-outline btn-secondary hover:bg-green-600 border-green-600 text-green-600 hover:text-white w-full mb-2'>{updatePro?'Hide Update Form':'Profile Update'}</button>
                            {
                                updatePro&&(
                                    <form onSubmit={handleUpdateProfile} >
                                <div className="space-y-2 text-sm">
                                    <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        ref={nameRef}  
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
                                        ref={photoRef}
                                        placeholder="Photo URL"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div className='mt-2 text-end'>
                                <button type='submit' className='btn btn-primary'>OK</button>
                                </div>
                            </form>
                                )
                            }
                        </div>
                            <div className=' text-center mt-10'>
                                <button onClick={handleLogOut} className='btn btn-outline btn-secondary w-full'>Log Out</button>
                            </div>
                        </div>
                        

                    </> : <>

                        <div className='bg-base-300 border border-gray-100 rounded-xl px-4 py-18  mt-20'>
                            <h2 className='text-4xl text-center font-bold mb-5'>
                                User Not Found!
                            </h2>

                            <p className='text-xl text-center font-bold mb-8'>Please SignUp Your Account</p>
                            <NavLink to='/'><button className='btn btn-outline btn-secondary w-full'>Back to Home</button></NavLink>
                        </div>

                    </>
                }
            </div>
        </>
    );
};

export default Profile;