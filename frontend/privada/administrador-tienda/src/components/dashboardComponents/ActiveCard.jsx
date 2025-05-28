import React from "react";
import { FaUsers } from "react-icons/fa"; // Ícono de usuarios del paquete react-icons

// Componente que muestra una tarjeta con cantidad de usuarios activos
const ActiveCard = () => {
  return (
    // Contenedor de la tarjeta con fondo turquesa, bordes redondeados y sombra
    <div className="bg-[#13A5AB] rounded-xl shadow-md p-4 w-full h-32 flex flex-col justify-between text-black">
      
      {/* Encabezado de la tarjeta con el texto y el ícono alineados */}
      <div className="flex justify-between items-start">
        <p className="text-sm font-semibold">Usuarios activos</p>
        <FaUsers className="text-lg" /> {/* Ícono de usuario */}
      </div>

      {/* Valor numérico representando los usuarios activos actuales */}
      <p className="text-xl font-bold">27/80</p>
    </div>
  );
};

export default ActiveCard;
