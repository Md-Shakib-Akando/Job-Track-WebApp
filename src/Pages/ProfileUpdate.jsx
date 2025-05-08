import React, { useContext, useEffect, useRef } from 'react';
import { valueContext } from '../RootLayout/RootLayout';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const ProfileUpdate = () => {
    const { user, setUser } = useContext(valueContext)

    const nameRef = useRef();
    const photoRef = useRef()
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const updatedName = nameRef.current.value;
        const updatedPhoto = photoRef.current.value;

        updateProfile(user, { displayName: updatedName, photoURL: updatedPhoto })
            .then(() => {
                setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto });
                toast.success("Sign Up Successfully Done");

            })
            .catch(error => {
                toast.error(error.message);
            });
    }
    useEffect(() => {
        document.title = 'JobTrack | Update-Profile';
    }, []);

    return (
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
                            <button type='submit' className='btn btn-primary'>Update</button>
                        </div>
                    </form>

                    <div>
                        <Link to='/profile'>
                            <button className='btn btn-outline btn-secondary mt-4 hover:bg-green-600 border-green-600 text-green-600 hover:text-white w-full mb-2'>Back To Profile</button>
                        </Link>



                    </div>

                </div>





            }
        </div>
    );
};

export default ProfileUpdate;