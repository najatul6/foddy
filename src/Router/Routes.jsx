import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import AuthLayout from "../Layout/AuthLayout"
import Login from "../Pages/Auth/Login"
import Register from "../Pages/Auth/Register"


const Routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "about",
                element:<About/>
            },
            {
                path: "contact",
                element:<Contact/>
            },
        ]
    },
    {
        path:"/auth",
        element:<AuthLayout/>,
        children:[
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
    }
])

export default Routes