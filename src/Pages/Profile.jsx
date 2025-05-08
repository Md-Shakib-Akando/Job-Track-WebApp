import React, { useContext, useEffect } from 'react';
import { valueContext } from '../RootLayout/RootLayout';


import { Link } from 'react-router';

const Profile = () => {
    const { handleSignOut, user } = useContext(valueContext)
    
    

    const handleLogOut = () => {
        handleSignOut();
    }
    
    
    useEffect(() => {
            document.title = 'JobTrack | Profile';
          }, []);
    return (
        <>
            <div className='flex justify-center items-center my-32 '>
                {
                  
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
                            <Link to='/profileUpdate'>
                            <button  className='btn btn-outline btn-secondary hover:bg-green-600 border-green-600 text-green-600 hover:text-white w-full mb-2'>Profile Update</button>
                            </Link>
                            
                                  
                            
                        </div>
                            <div className=' text-center mt-3'>
                                <button onClick={handleLogOut} className='btn btn-outline btn-secondary w-full'>Log Out</button>
                            </div>
                        </div>
                        

                     

                    
                }
            </div>
        </>
    );
};

export default Profile;