import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="w-full flex min-h-screen">
        <div className="hidden lg:flex justify-center items-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center ">
            <h1 className="text-5xl text-white font-bold">Welcome Back</h1>
            <p className="text-gray-300">To keep connected with us please login with your personal info</p>
        </div>
        </div>
        <div className="flex-1 flex justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout