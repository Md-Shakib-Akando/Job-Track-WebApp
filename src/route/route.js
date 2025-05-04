import {
    createBrowserRouter,
  
  } from "react-router";
  
  
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Companies from "../Pages/Companies";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children:[
        {index:true, Component:Home,},
        {
            path:"/companies", Component:Companies,
        }
      ]
    },
  ]);