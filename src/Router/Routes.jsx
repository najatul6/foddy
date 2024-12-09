import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"


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
        ]
    }
])

export default Routes