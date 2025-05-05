import React, { useContext } from 'react';
import { valueContext } from '../RootLayout/RootLayout';

const Profile = () => {
    const {handleSignOut}=useContext(valueContext)
    const handleLogOut=()=>{
        handleSignOut();
    }
    return (
        <div>
            <h2>User Profile</h2>
            <button onClick={handleLogOut} className='btn btn-outline btn-secondary'>Log OUt</button>
        </div>
    );
};

export default Profile;