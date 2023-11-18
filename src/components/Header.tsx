import { RxDashboard } from "react-icons/rx";
import { HiOutlineBolt } from "react-icons/hi2";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { FiLayers } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import UserSection from "./Shared/Header/UserSection";
const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav className="w-56 p-5 bg-primary flex flex-col justify-between">
      <div className="flex flex-col space-y-5">
        <img
          className="h-16 object-contain"
          src={require("../assets/logo-white-sm.png")}
          alt=""
        />
        <div className="h-11 w-full py-0.5 bg-blue-gradient rounded-lg flex items-center justify-center">
          <button
            className={`h-10 w-full flex items-center pl-3 space-x-2 bg-primary/95 rounded-lg`}
          >
            <div className="bg-blue-gradient rounded-full p-1.5">
              <FaPlus color="white" size={15} />
            </div>
            <span className="text-white text-sm">Create new</span>
          </button>
        </div>

        <Link
          to="/"
          className={`h-10 w-full ${
            path === "/" ? "bg-blue-gradient" : "hover:bg-black transition-all"
          } flex items-center pl-3 space-x-2 rounded-lg`}
        >
          <RxDashboard color="white" size={20} />
          <span className="text-white text-sm">Dashboard</span>
        </Link>
        <Link
          to="/generate"
          className={`h-10 w-full ${
            path === "/generate"
              ? "bg-blue-gradient"
              : "hover:bg-black transition-all"
          } flex items-center pl-3 space-x-2 rounded-lg`}
        >
          <HiOutlineBolt color="white" size={20} />
          <span className="text-white text-sm">Generate</span>
        </Link>
        <Link
          to="/analytics"
          className={`h-10 w-full ${
            path === "/analytics"
              ? "bg-blue-gradient"
              : "hover:bg-black transition-all"
          } flex items-center pl-3 space-x-2 rounded-lg`}
        >
          <MdOutlineAnalytics color="white" size={20} />
          <span className="text-white text-sm">Analytics</span>
        </Link>
        <Link
          to="/syndication"
          className={`h-10 w-full ${
            path === "/syndication"
              ? "bg-blue-gradient"
              : "hover:bg-black transition-all"
          } flex items-center pl-3 space-x-2 rounded-lg`}
        >
          <TbMessage2 color="white" size={20} />
          <span className="text-white text-sm">Syndication</span>
        </Link>
        <Link
          to="/leads"
          className={`h-10 w-full ${
            path === "/leads"
              ? "bg-blue-gradient"
              : "hover:bg-black transition-all"
          } flex items-center pl-3 space-x-2 rounded-lg`}
        >
          <FiLayers color="white" size={20} />
          <span className="text-white text-sm">Leads</span>
        </Link>
      </div>
      <UserSection />
    </nav>
  );
};

export default Header;
