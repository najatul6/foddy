import { Outlet } from "react-router-dom";
import deliveryImg from "../assets/food.gif"

const AuthLayout = () => {
  return (
    <div className="w-full flex min-h-screen">
      <div className="hidden lg:flex justify-center items-center bg-black w-1/2">
        <div className="w-full h-full">
          {/* <h1 className="text-5xl text-white font-bold">Welcome!</h1>
          <p className="text-gray-300">
            To keep connected with us with your personal info
          </p> */}
          <img src={deliveryImg} alt="" className="h-full"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-[#f2d9c5e1]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;