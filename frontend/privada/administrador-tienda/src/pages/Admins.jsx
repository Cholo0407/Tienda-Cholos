import React from 'react';
import AdminTable from '../components/AdminComponents/AdminTable';

const Admins = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar ya existe, así que este div es el contenido */}
      <div className="flex-1 p-4 overflow-auto">
        <AdminTable />
      </div>
    </div>
  );
};

export default Admins;
