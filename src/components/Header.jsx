import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-44">
      <div>
        <img
          className="mx-auto"
          src="https://cdn-icons-png.flaticon.com/128/9186/9186780.png"
          alt=""
        />
        <h2 className="text-3xl text-center font-semibold my-4">
          Join the Community
        </h2>
        <p className="my-2 text-center">
          Discover a world of possibilities with our innovative platform. <br />{" "}
          Sign up today and start your journey!
        </p>
        <div className="w-full  flex items-center justify-center">
          <button
            onClick={() => navigate("/login")}
            class="mt-4 cursor-pointer px-6 py-2 bg-slate-800 rounded-sm text-slate-300 hover:bg-slate-700"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
