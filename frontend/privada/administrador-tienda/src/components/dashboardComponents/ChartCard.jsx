import React from "react";
// Importación de componentes de Recharts para construir un gráfico de barras
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Datos estáticos de ejemplo para el gráfico
const data = [
  { name: "Feb", ventas: 80 },
  { name: "Abr", ventas: 180 },
  { name: "Jun", ventas: 140 },
  { name: "Ago", ventas: 280 },
  { name: "Oct", ventas: 290 },
  { name: "Dic", ventas: 360 },
];

// Componente que representa una tarjeta con un gráfico de barras de ventas
const ChartCard = () => {
  return (
    // Contenedor visual estilizado de la tarjeta
    <div className="bg-white p-4 rounded-lg shadow col-span-1">
      {/* Título del gráfico */}
      <h3 className="text-md font-semibold text-black mb-4">Ventas</h3>

      {/* Contenedor responsivo que ajusta el tamaño del gráfico automáticamente */}
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          {/* Grid del fondo del gráfico */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* Eje X mostrando los nombres de los meses */}
          <XAxis dataKey="name" />
          {/* Eje Y automático según el valor más alto */}
          <YAxis />
          {/* Gráfico de barras basado en el valor de 'ventas' */}
          <Bar dataKey="ventas" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
