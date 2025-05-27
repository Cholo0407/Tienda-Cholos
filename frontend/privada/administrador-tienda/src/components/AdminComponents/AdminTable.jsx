import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const usuarios = [
  { id: '1', nombre: 'Luis', apellido: 'Martínez', telefono: '7854-1234', correo: 'luis.martinez@gmail.com' },
  { id: '2', nombre: 'Carla', apellido: 'Gómez', telefono: '7698-2234', correo: 'carla.gomez@hotmail.com' },
  { id: '3', nombre: 'Roberto', apellido: 'Hernández', telefono: '7567-3345', correo: 'roberto.hdz@yahoo.com' },
  { id: '4', nombre: 'María', apellido: 'López', telefono: '7544-5566', correo: 'maria.lopez@gmail.com' },
  { id: '5', nombre: 'José', apellido: 'Pérez', telefono: '7123-9876', correo: 'jose.perez@outlook.com' },
  { id: '6', nombre: 'Sandra', apellido: 'Ramírez', telefono: '7555-1122', correo: 'sandra.ramirez@gmail.com' },
  { id: '7', nombre: 'Pedro', apellido: 'Ortega', telefono: '7633-8877', correo: 'pedro.ortega@yahoo.com' },
  { id: '8', nombre: 'Ana', apellido: 'Flores', telefono: '7722-9988', correo: 'ana.flores@hotmail.com' },
  { id: '9', nombre: 'Carlos', apellido: 'Castro', telefono: '7888-6655', correo: 'carlos.castro@gmail.com' },
  { id: '10', nombre: 'Lucía', apellido: 'Navarro', telefono: '7666-4433', correo: 'lucia.navarro@outlook.com' },
];

const AdminTable = () => {
  const handleEditar = (id) => {
    console.log('Editar usuario', id);
  };

  const handleEliminar = (id) => {
    console.log('Eliminar usuario', id);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-6xl mx-auto">
      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3 text-left">Acciones</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Apellido</th>
              <th className="p-3 text-left">Teléfono</th>
              <th className="p-3 text-left">Correo</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-3">
                  <div className="flex gap-2 items-center">
                    <button
                      className="p-1.5 border border-gray-300 rounded hover:bg-gray-100 text-black"
                      onClick={() => handleEliminar(usuario.id)}
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      className="p-1.5 border border-gray-300 rounded hover:bg-gray-100 text-black"
                      onClick={() => handleEditar(usuario.id)}
                    >
                      <FaEdit />
                    </button>
                  </div>
                </td>
                <td className="p-3 text-gray-700">{usuario.id}</td>
                <td className="p-3">{usuario.nombre}</td>
                <td className="p-3">{usuario.apellido}</td>
                <td className="p-3">{usuario.telefono}</td>
                <td className="p-3">{usuario.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
