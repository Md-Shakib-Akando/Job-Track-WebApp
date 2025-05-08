import React, { useContext } from 'react';
import { valueContext } from '../RootLayout/RootLayout';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(valueContext);
    const location =useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user&&user?.email){
    return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;