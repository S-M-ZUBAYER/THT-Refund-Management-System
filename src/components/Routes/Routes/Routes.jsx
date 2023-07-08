import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Pages/HomePage/Home";
import Refund from "../../Pages/RefundPage/Refund";
import Resend from "../../Pages/ResendPage/Resend";
import Supply from "../../Pages/SupplyPage/Supply";
import Repair from "../../Pages/RepairPage/Repair";
import About from "../../Pages/AboutPage/About";
import Login from "../../Pages/LogInPage/LogIn";



export const  routes=createBrowserRouter([

{
 path:"/",
 element:<Main></Main>,
 errorElement:<ErrorPage></ErrorPage>,
 children:[
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/home",
        element:<Home></Home>
    },
    {
        path:"/refund",
        element:<Refund></Refund>
    },
    {
        path:"/resend",
        element:<Resend></Resend>
    },
    {
        path:"/supply",
        element:<Supply></Supply>
    },
    {
        path:"/repair",
        element:<Repair></Repair>
    },
    {
        path:"/about",
        element:<About></About>
    }
 ]
    
},

    {
        path:"/login",
        element:<Login></Login>
    }

])