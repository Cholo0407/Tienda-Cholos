import React from "react";

// Componente que representa una tarjeta estadística reutilizable
// Recibe props: title (título), value (número o valor principal),
// subtitle (texto adicional) e icon (ícono decorativo)
const StatCard = ({ title, value, subtitle, icon }) => {
  return (
    // Contenedor con fondo blanco, padding, bordes redondeados y sombra
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
      
      {/* Área del ícono, generalmente un ícono de react-icons */}
      <div>{icon}</div>
      
      {/* Área de texto con título, valor principal y subtítulo */}
      <div>
        <h2 className="text-sm font-medium text-gray-600">{title}</h2> {/* Título (ej. "Total de clientes") */}
        <p className="text-2xl font-bold text-black">{value}</p>        {/* Valor destacado (ej. "650") */}
        <p className="text-sm text-gray-500">{subtitle}</p>            {/* Subtexto (ej. "↑ 15% este mes") */}
      </div>
    </div>
  );
};

export default StatCard;
