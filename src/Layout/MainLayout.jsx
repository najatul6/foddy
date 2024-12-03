import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="min-h-screen mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
