import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-12 py-4">
      <div>
        <img
          onClick={() => navigate("/")}
          className="w-[35%] cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/61/61191.png"
          alt="logo"
        />
      </div>
      <button
        onClick={() => navigate("/login")}
        className="flex items-center cursor-pointer px-6 py-2 bg-slate-800 rounded-sm text-slate-300 hover:bg-slate-700"
      >
        Login <HiOutlineArrowSmRight />
      </button>
    </nav>
  );
};

export default Navbar;
