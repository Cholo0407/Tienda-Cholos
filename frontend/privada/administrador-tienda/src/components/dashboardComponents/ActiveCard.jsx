import React from "react";
import { FaUsers } from "react-icons/fa";

const ActiveCard = () => {
  return (
    <div className="bg-[#13A5AB] rounded-xl shadow-md p-4 w-full h-32 flex flex-col justify-between text-black">
      <div className="flex justify-between items-start">
        <p className="text-sm font-semibold">Usuarios activos</p>
        <FaUsers className="text-lg" />
      </div>
      <p className="text-xl font-bold">27/80</p>
    </div>
  );
};

export default ActiveCard;
