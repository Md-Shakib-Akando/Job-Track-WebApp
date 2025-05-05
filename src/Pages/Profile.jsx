import React, { useContext } from 'react';
import { valueContext } from '../RootLayout/RootLayout';

const Profile = () => {
    const {handleSignOut,user}=useContext(valueContext)
    const handleLogOut=()=>{
        handleSignOut();
    }
    return (
        <>
            {
               user?<div>
               <h2>User Profile</h2>
               <button onClick={handleLogOut} className='btn btn-outline btn-secondary'>Log OUt</button>
           </div>:<p>user not found please login</p>
            }  
        </>
    );
};

export default Profile;