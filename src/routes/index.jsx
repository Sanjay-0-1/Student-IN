import {createBrowserRouter,} from "react-router-dom";
import Wel from "../pages/wel";
import Login from "../pages/SignIn";
import Register from "../pages/Signup";
import HomeL from "../main/HomeL";
import ProfileLayout from "../main/ProfileLayout";
import ConnectionLayout from "../main/ConnectionLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Wel />,
    },
    {
        path: "/SignIn",
        element: <Login />,
    },
    {
        path: "/Signup",
        element: <Register />,
    },
    {
        path: "/home",
        element: <HomeL />,
    },
    {
        path: "/profile",
        element: <ProfileLayout />,
      },
      {
        path: "/connections",
        element: <ConnectionLayout />,
      },
     
]);