import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
