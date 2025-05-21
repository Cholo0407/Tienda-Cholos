import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordBox = ({ placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-xl border-[#C4C4C4] focus:outline-none focus:ring-0 focus:border-[#C4C4C4] focus:shadow-md pr-10"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        onClick={() => setShowPassword((prev) => !prev)}
        tabIndex={-1}
      >
        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
      </button>
    </div>
  );
};

export default PasswordBox;
