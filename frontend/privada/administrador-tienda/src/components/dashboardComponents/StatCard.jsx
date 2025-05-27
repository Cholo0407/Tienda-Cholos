import React from "react";

const StatCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
      <div>{icon}</div>
      <div>
        <h2 className="text-sm font-medium text-gray-600">{title}</h2>
        <p className="text-2xl font-bold text-black">{value}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;
