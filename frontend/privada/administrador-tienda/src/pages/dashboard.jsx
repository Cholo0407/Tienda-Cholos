import React from "react";
import StatCard from "../components/dashboardComponents/StatCard";
import ActiveCard from "../components/dashboardComponents/ActiveCard";
import ChartCard from "../components/dashboardComponents/ChartCard";

// Importación de íconos
import { FaUsers, FaTag, FaChartLine } from "react-icons/fa";

// Datos estáticos que se mostrarán en tarjetas de estadísticas
const stats = [
  {
    title: "Total de Clientes",           // Título de la tarjeta
    value: "650",                         // Valor principal
    subtitle: "↑ 15% este mes",           // Subtítulo informativo
    icon: <FaUsers className="text-emerald-500 text-3xl" />, // Ícono decorativo
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

// Componente principal del Dashboard
const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Título del dashboard */}
      <h1 className="text-2xl font-bold mb-4 text-black">Hola de nuevo 👋🏾</h1>

      {/* Tarjetas de estadísticas (stats) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} /> // Se pasan las props a cada tarjeta
        ))}
      </div>

      {/* Sección inferior del dashboard con tarjetas activas y un gráfico */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Cuatro tarjetas de usuarios activos */}
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <ActiveCard />
          <ActiveCard />
          <ActiveCard />
          <ActiveCard />
        </div>

        {/* Tarjeta con gráfico de actividad o rendimiento */}
        <ChartCard />
      </div>
    </div>
  );
};

export default Dashboard;
