import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className="flex justify-center items-center flex-1">
            <h1 className="text-3xl font-bold text-center">Auth Layout</h1>
        </div>
        <Outlet />
    </div>
  )
}

export default AuthLayout