import React, { createContext, useEffect, useState } from 'react';
import {  Outlet, useNavigate } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase.config';
import { toast, ToastContainer } from 'react-toastify';


export const valueContext=createContext();

const RootLayout = () => {
    const navigate=useNavigate();
    const auth=getAuth( app );
    const [user,setUser]=useState(null);
    const handleRegister=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            setUser(user);
            toast.success("signUp Successfully Done")
            navigate('/')
        }).catch(error=>{
            toast.error(error.message);
        })
    }
    const handleLogin=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            setUser(user);
            toast.success("signIn Successfully Done")
            navigate('/')
        }).catch(error=>{
            toast.error(error.message);
        })
    }
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, [auth]);

    const handleSignOut=()=>{
        signOut(auth).then(result=>{
            console.log(result)
            
            toast.success("LogOUt Successful")
            navigate('/login')
        }).catch(error=>{
            toast.error(error.message);
        })
    }

    const data={
        handleRegister,
        handleLogin,
        user,
        setUser,
        handleSignOut,
    }
    
    return (
        <>
            <valueContext.Provider value={data}>
            <Navbar></Navbar>
            <div className='w-10/12 mx-auto min-h-screen'>
            <Outlet></Outlet>
            </div>
            </valueContext.Provider>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
};

export default RootLayout;