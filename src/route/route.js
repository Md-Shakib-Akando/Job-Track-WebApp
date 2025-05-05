import {
    createBrowserRouter,
  
  } from "react-router";
  
  
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Companies from "../Pages/Companies";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children:[
        {index:true, Component:Home,},
        {
            path:"/companies", Component:Companies,
        },
        {
          path:'/login', Component:LogIn,
        },
        {
          path:'/register', Component:Register,
        },
        {
          path:'/profile', Component:Profile,
        }
      ]
    },
  ]);