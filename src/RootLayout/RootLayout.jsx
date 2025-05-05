import React, { createContext, useEffect, useState } from 'react';
import {  Outlet, useNavigate } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

export const valueContext=createContext();

const RootLayout = () => {
    const provider=new GoogleAuthProvider();
    const navigate=useNavigate();
    const auth=getAuth( app );
    const [user,setUser]=useState(null);
    const handleRegister=(email,password,name ,photo)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            updateProfile(result.user,{displayName:name,photoURL:photo})
            .then(() => {
                setUser({ ...result.user, displayName: name, photoURL: photo });
                toast.success("Sign Up Successfully Done");
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            });
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
    const handleGoogleSignIn=()=>{
        if(user) return toast.info("Already signed in");
        signInWithPopup(auth,provider)
        .then(result=>{
            const user=result.user;
            setUser(user);
            toast.success("Google Sign-In Successful");
            navigate('/');
        }).catch(error=>{
            toast.error(error.message)
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

    const handleForgetPass=(email)=>{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            toast.info("Check Your Mailbox")
        }).catch(error=>{
            toast.error(error.message)
        })
    }

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
        handleGoogleSignIn,
        handleForgetPass,
        
    }
    
    return (
        <>
            <valueContext.Provider value={data}>
            <Navbar></Navbar>
            <div className='w-full mx-auto min-h-screen-[calc(100vh-330px)]'>
            <Outlet></Outlet>
            </div>
            </valueContext.Provider>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
};

export default RootLayout;