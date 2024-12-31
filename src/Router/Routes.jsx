import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"


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
    }
])

export default Routes