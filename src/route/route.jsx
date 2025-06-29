import {
    createBrowserRouter,
  
  } from "react-router";
  
  
  

  import RootLayout from "../RootLayout/RootLayout";
  import Home from "../Pages/Home";
  import LogIn from "../Pages/LogIn";
  import Register from "../Pages/Register";
  import Profile from "../Pages/Profile";
  import CompanyDetails from "../Pages/CompanyDetails";
  import Companies from "../Pages/Companies";
  import FAQ from "../Pages/FAQ";
  
import Loading from "../components/Loading/Loading";
import PrivateRoute from "../PrivateRout/PrivateRoute";
import ProfileUpdate from "../Pages/ProfileUpdate";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          index: true,
          element: <Home />,
          hydrateFallbackElement:<Loading></Loading>,
          loader: () => fetch('/Companies.json'),
        },
        {
          path: '/companies',
          element: <Companies />,
          hydrateFallbackElement:<Loading></Loading>,
          loader: () => fetch('/Companies.json'),
        },
        {
          path: '/companyDetails/:id',
          element: (
            <PrivateRoute>
              <CompanyDetails />
            </PrivateRoute>
          ),
          hydrateFallbackElement:<Loading></Loading>,
          loader: () => fetch('/Companies.json'),
        },
        {
          path: '/login',
          element: <LogIn />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path:'/forgetPassword',
          Component:ForgetPassword,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path:'/profileUpdate',
          Component:ProfileUpdate,
        },
        {
          path: '/faq',
          element: <FAQ />,
        },
      ],
    },
  ]);
  