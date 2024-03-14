import { NavLink } from "react-router-dom";
import logo1 from "../../../assets/logo-1.jpg";
import { GiSelfLove } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
// import { Typewriter } from "react-simple-typewriter";
const Navbar = () => {
  const { user,logOut } = useAuth();
  
  // logout function here

  const handleLogOut = () =>{
    logOut().then(()=>{
      toast.success("Sign-Out Successfully")
    })
  }

  // Navbar links here
  const links = (
    <>
      <li className="px-2 text-md">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-[#22B2D8]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="px-2 text-md">
        <NavLink
          to={"/services"}
          className={({ isActive }) => (isActive ? "text-[#22B2D8]" : "")}
        >
          Services
        </NavLink>
      </li>
      <li className="px-2 text-md">
        <NavLink
          to={"/medicine"}
          className={({ isActive }) => (isActive ? "text-[#22B2D8]" : "")}
        >
          Medicine
        </NavLink>
      </li>
      <li className="px-2 text-md">
        <NavLink
          to={"/blog"}
          className={({ isActive }) => (isActive ? "text-[#22B2D8]" : "")}
        >
          Blog
        </NavLink>
      </li>
      <li className="px-2 text-md">
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-[#22B2D8]" : "")}
        >
          Contact Us
        </NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <li className="px-2 text-md">
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "text-[#22B2D8]" : "")}
          >
            Login
          </NavLink>
        </li>
      )}
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
          <img src={logo1} className="w-12 h-12" alt="" />
          <p className="text-sm flex flex-col italic font-bold -mt-2 font-another">
            {/* <Typewriter
              words={["Musa Dental Care"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            /> */}
            Musa Dental Care
            <span className="text-center font-normal hidden md:inline-block">
              since 2014
            </span>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mr-5">{links}</ul>
      </div>
      <div className="hidden md:flex">
        <GiSelfLove className="text-3xl -mr-4" />
        <div className="divider lg:divider-horizontal divider-neutral"></div>
        <IoSearchOutline className="text-3xl -ml-4" />
      </div>
      <div className="navbar-end justify-between">
        <button className="btn bg-primary text-white hover:bg-slate-600 ml-4">
          Appointment
        </button>
        {/* user info */}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle avatar w-16 h-16"
            >
              <div className="w-14 rounded-full">
                {user && (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user
                        ? user?.photoURL
                        : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                )}
              </div>
            </div>
            <ul
              // tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
