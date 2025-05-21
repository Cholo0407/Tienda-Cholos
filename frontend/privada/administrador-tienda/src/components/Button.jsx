// src/components/Button.jsx
import React from "react";

const Button = ({ text, onClick }) => (
  <button
    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
);

export default Button;
