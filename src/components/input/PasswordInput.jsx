import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center bg-cyan-100/20 px-4 sm:px-5 rounded mb-3 border border-cyan-300 focus-within:ring-2 focus-within:ring-cyan-400 transition">
      <input
        type={isShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        className="w-full text-xs sm:text-sm bg-transparent py-2 sm:py-3 rounded outline-none"
      />
      {isShowPassword ? (
        <FaRegEye
          size={20}
          className="text-cyan-600 cursor-pointer"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={20}
          className="text-cyan-600 cursor-pointer"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;