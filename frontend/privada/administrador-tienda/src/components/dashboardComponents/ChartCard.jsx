import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Feb", ventas: 80 },
  { name: "Abr", ventas: 180 },
  { name: "Jun", ventas: 140 },
  { name: "Ago", ventas: 280 },
  { name: "Oct", ventas: 290 },
  { name: "Dic", ventas: 360 },
];

const ChartCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow col-span-1">
      <h3 className="text-md font-semibold text-black mb-4">Ventas</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="ventas" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
