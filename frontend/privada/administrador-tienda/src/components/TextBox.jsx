import React from "react";

const TextBox = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded-xl border-[#C4C4C4] focus:outline-none focus:ring-0 focus:border-[#C4C4C4] focus:shadow-md"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextBox;
