import React, { useState } from "react";
import PasswordInput from "../../components/input/PasswordInput";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInst";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a valid password.");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(`https://traveldiary-udd9.onrender.com/login`, { email, password });

      if (response.data && response.data.accessToken) {
        setError(null); // Clear error state
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred, please try again.");
      }
    }
  };

  return (
    <div className="h-screen bg-cyan-50 overflow-hidden relative">
      {/* Decorative Boxes */}
      <div className="login-ui-box right-10 -top-40 hidden lg:block" />
      <div className="login-ui-box bg-cyan-300 -bottom-40 right-1/2 hidden lg:block" />

      <div className="container h-screen flex flex-col lg:flex-row items-center justify-center px-5 md:px-10 lg:px-20 mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-2/4 h-[40vh] lg:h-[90vh] flex items-center justify-center lg:items-end bg-login-bg-img bg-cover bg-center rounded-lg p-5 lg:p-10 z-50 mb-8 lg:mb-0">
          <div className="text-center lg:text-left">
            <h4 className="text-2xl lg:text-5xl text-white font-semibold leading-[40px] lg:leading-[70px]">
              Capture Your
              <br />
              Journeys
            </h4>
            <p className="text-sm lg:text-[15px] text-white leading-6 lg:leading-9 pr-0 lg:pr-8 mt-3">
              Record your travel experiences and memories in your personal
              travel journal.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/4 h-auto lg:h-[75vh] bg-white rounded-lg lg:rounded-r-lg p-10 md:p-16 shadow-lg shadow-cyan-200/20">
          <form onSubmit={handleLogin}>
            <h4 className="text-xl lg:text-2xl font-semibold mb-5 lg:mb-7 text-center lg:text-left">Login</h4>

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              aria-label="Email"
            />

            <PasswordInput
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Password"
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              LOGIN
            </button>
            <p className="text-xs text-slate-500 text-center my-4">Or</p>
            <button
              type="button"
              className="btn-primary btn-light"
              onClick={() => {
                navigate("/signUp");
              }}
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;