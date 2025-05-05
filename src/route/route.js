import {
    createBrowserRouter,
  
  } from "react-router";
  
  
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import CompanyDetails from "../Pages/CompanyDetails";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children:[
        {index:true,
        Component:Home,
        loader:()=>fetch('/Companies.json')
        },
        {
            path:"/companyDetails/:id",
            Component:CompanyDetails,
            loader:()=>fetch('/Companies.json')
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