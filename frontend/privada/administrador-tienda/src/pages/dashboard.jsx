import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bienvenido al Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Usuarios Activos</h2>
          <p className="text-gray-600">124 usuarios registrados este mes.</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Pedidos</h2>
          <p className="text-gray-600">48 pedidos procesados esta semana.</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Visitas</h2>
          <p className="text-gray-600">3500 visitas en el sitio web.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
