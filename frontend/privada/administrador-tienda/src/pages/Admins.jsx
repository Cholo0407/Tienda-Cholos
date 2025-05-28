import React from 'react';
import AdminTable from '../components/AdminComponents/AdminTable';

// Componente principal que representa la vista de administradores
const Admins = () => {
  return (
    // Contenedor principal con flexbox y altura de pantalla completa
    <div className="flex h-screen bg-gray-50">
      
      {/* Área de contenido principal (ya existe un sidebar fuera de este componente) */}
      <div className="flex-1 p-4 overflow-auto">
        {/* Tabla de administradores */}
        <AdminTable />
      </div>
    </div>
  );
};

export default Admins;
