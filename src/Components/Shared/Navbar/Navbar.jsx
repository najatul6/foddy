import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { routes } from "../../../utils/menu";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-[999] py-[1.3rem] px-[2%] lg:py-1 lg:px-[2%] flex gap-1 lg:justify-between items-center before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-deep-black  before:z-[-1] shadow-xl shadow-gradient-back text-white font-bold">
      <div className="text-3xl font-bold lg:leading-[70px] cursor-pointer">
        <a href="/" className="block">
        F<span className="text-deep-orange">odd</span>y
        </a>
      </div>
      <label
        htmlFor=""
        className="text-4xl text-white cursor-pointer lg:hidden absolute right-[5%] inline-flex duration-300 hover:shadow-[#33ffff_0px_0px_5px] hover:text-cyan-500 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </label>
      <nav
        className={`${
          isOpen ? "h-[17 rem]" : " h-0 overflow-hidden "
        } top-full  absolute left-0 w-full bg-deep-black backdrop-blur-2xl shadow-2xl shadow-gradient-back transition-all duration-500 lg:h-auto lg:static lg:w-auto lg:bg-inherit lg:backdrop-blur-0 lg:shadow-none delay-700 lg:delay-0`}
      >
        <ul className="flex flex-col lg:flex-row justify-between items-center gap-6 px-5 py-5 md:py-2 lg:py-0">
          {routes?.map((route) => (
            <li
              key={route?.id}
              className={`${
                isOpen
                  ? "translate-y-0 transition-all duration-300"
                  : "translate-y-[-50px] lg:translate-y-0 transition-all duration-700"
              }`}
            >
              <NavLink
                to={route?.path}
                className={({ isActive }) =>
                  `md:leading-[70px] w-full text-lg py-2 px-4 rounded-md duration-300 ${
                    isActive
                      ? "text-deep-orange  border-deep-orange border-t-2"
                      : " hover:text-deep-orange hover:border-b-2 hover:border-t-2 hover:border-deep-orange "
                  }`}
              >
                {route?.name}
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
      <div className="md:w-full md:mx-auto md:flex md:justify-center md:items-center lg:justify-between lg:w-auto lg:mx-0">
      <Link to="/login"><Button text="Order Now" icon={<FaArrowRight />} withOutbg /></Link>
      </div>
    </header>
  );
};

export default Navbar;
