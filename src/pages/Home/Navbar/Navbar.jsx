import { NavLink } from "react-router-dom";
import logo1 from "../../../assets/logo-1.jpg";
import { GiSelfLove } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
const Navbar = () => {
  const links = (
    <>
      <li className="px-2">
        <NavLink>Home</NavLink>
      </li>
      <li className="px-2">
        <NavLink>Services</NavLink>
      </li>
      <li className="px-2">
        <NavLink>Pricing</NavLink>
      </li>
      <li className="px-2">
        <NavLink>Branch</NavLink>
      </li>
      <li className="px-2">
        <NavLink>Medicine</NavLink>
      </li>
      <li className="px-2">
        <NavLink>Blog</NavLink>
      </li>
      <li className="px-2">
        <NavLink>Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="text-center flex md:flex-col flex-row justify-center items-center">
          <img src={logo1} className="w-24 h-20" alt="" />
          <p className="text-sm flex flex-col italic font-bold -mt-2 font-another">
            <Typewriter
              words={["Musa Dental Care"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <span className="text-center font-normal hidden md:inline-block">
              since 2014
            </span>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mr-5">{links}</ul>
      </div>
      <div>
        <GiSelfLove className="text-3xl -mr-4" />
        <div className="divider lg:divider-horizontal divider-neutral"></div>
        <IoSearchOutline className="text-3xl -ml-4" />
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#22B2D8] text-white hover:bg-slate-600">
          Appointment Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
