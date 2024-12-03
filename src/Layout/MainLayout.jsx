import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Footer from "../Components/Shared/Footer/Footer"

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout