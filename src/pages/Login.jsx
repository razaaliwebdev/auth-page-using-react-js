import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-full bg-linear-to-tr from-indigo-500 to-pink-300">
      <img
        onClick={() => navigate("/")}
        className="w-[50px] ms-10 pt-5 cursor-pointer"
        src="https://cdn-icons-png.flaticon.com/128/61/61191.png"
        alt="logo"
      />

      <div className="container  flex justify-center">
        <form
          action=""
          className="bg-linear-to-bl from-slate-800 to-gray-900 w-[95%] md:w-[30%] mt-10 rounded-sm px-8 py-6 shadow-lg"
        >
          <div className="header">
            {state === "Sign Up" ? (
              <div className="signup">
                <h1 className="text-3xl text-center text-gray-200 font-semibold">
                  Create Your Account
                </h1>
                <p className="text-center text-indigo-400 py-2">
                  Create you account!
                </p>
              </div>
            ) : (
              <div className="login">
                <h1 className="text-3xl text-center text-gray-200 font-semibold">
                  Login
                </h1>
                <p className="text-center text-indigo-400 py-2">
                  Login you account!
                </p>
              </div>
            )}
          </div>

          <div className="main">
            {state === "Sign Up" && (
              <div className="inputField my-6 gap-4 flex items-center w-full border-gray-400 border rounded-sm p-2 text-gray-300">
                <FaUser className="text-gray-400 text-xl " />
                <input
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-none placeholder:text-gray-400 text-lg w-[90%] h-full outline-0"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            )}

            <div className="inputField my-6 gap-4 flex items-center w-full border-gray-400 border rounded-sm p-2 text-gray-300">
              <IoMdMail className="text-gray-400 text-xl " />
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-none placeholder:text-gray-400 text-lg w-[90%] h-full outline-0"
                type="email"
                placeholder="Email Id"
              />
            </div>
            <div className="inputField mt-6 mb-2 gap-4 flex items-center w-full border-gray-400 border rounded-sm p-2 text-gray-300">
              <FaLock className="text-gray-400 text-xl " />
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-none placeholder:text-gray-400 text-lg w-[90%] h-full outline-0"
                type="password"
                placeholder="........"
              />
            </div>
            <p
              onClick={() => navigate("/reset-password")}
              className="text-indigo-500 my-2 cursor-pointer"
            >
              Forgot Password?
            </p>
            <button className="bg-linear-to-tl from-indigo-600 to-pink-400 hover:bg-linear-to-tr my-2 border border-gray-400 w-full rounded-sm p-2 text-gray-200 text-center font-medium text-lg cursor-pointer">
              {state === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div>
              {state === "Sign Up" ? (
                <p className="text-gray-300 my-1">
                  Already have an account? {"  "}
                  <span
                    onClick={() => setState("Login")}
                    className="text-indigo-500 cursor-pointer"
                  >
                    Login here
                  </span>
                </p>
              ) : (
                <p className="text-gray-300 my-1">
                  Don't have an account? {"  "}
                  <span
                    onClick={() => setState("Sign Up")}
                    className="text-indigo-500 cursor-pointer"
                  >
                    Sign Up here
                  </span>
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
