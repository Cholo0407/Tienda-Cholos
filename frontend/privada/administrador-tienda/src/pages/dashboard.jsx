// Dashboard.jsx
import React from "react";
import StatCard from "../components/dashboardComponents/StatCard";
import ActiveCard from "../components/dashboardComponents/ActiveCard";
import ChartCard from "../components/dashboardComponents/ChartCard";
import { FaUsers, FaTag, FaChartLine } from "react-icons/fa";

const stats = [
  {
    title: "Total de Clientes",
    value: "650",
    subtitle: "↑ 15% este mes",
    icon: <FaUsers className="text-emerald-500 text-3xl" />,
  },
  {
    title: "Marcas registradas",
    value: "8",
    subtitle: "Noticias de esta semana",
    icon: <FaTag className="text-emerald-500 text-3xl" />,
  },
  {
    title: "Activos Ahora",
    value: "189",
    subtitle: "Usuarios conectados",
    icon: <FaChartLine className="text-emerald-500 text-3xl" />,
  },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Hola de nuevo 👋🏾</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <ActiveCard />
          <ActiveCard />
          <ActiveCard />
          <ActiveCard />
        </div>
        <ChartCard />
      </div>
    </div>
  );
};

export default Dashboard;
