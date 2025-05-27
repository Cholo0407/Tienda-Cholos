import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const administradores = [
  { id: 1, nombre: "Ramón Valdez", edad: 25, adulto: false, cumple: "2 de junio" },
  { id: 2, nombre: "En forma", edad: 75, adulto: true, cumple: "8 de diciembre" },
  { id: 3, nombre: "En forma", edad: 75, adulto: true, cumple: "8 de diciembre" },
  { id: 4, nombre: "En forma", edad: 75, adulto: false, cumple: "8 de diciembre" },
  { id: 5, nombre: "En forma", edad: 75, adulto: true, cumple: "8 de diciembre" },
  { id: 6, nombre: "Otro admin", edad: 30, adulto: true, cumple: "15 de marzo" },
];

const rowsPerPage = 5;

const AdminsTable = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    const totalPages = Math.ceil(administradores.length / rowsPerPage);
    if (page < totalPages - 1) setPage(page + 1);
  };

  const currentData = administradores.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div className="relative max-w-6xl mx-auto px-4 mt-20">
      {/* Botón flotante aún más arriba */}
      <div className="absolute -top-14 left-6 z-20">
        <button
          onClick={() => navigate("/administradores/crear")}
          className="bg-black hover:bg-gray-800 text-white font-bold w-10 h-10 rounded-full text-2xl flex items-center justify-center shadow-md transition-transform hover:scale-110"
          title="Agregar administrador"
        >
          +
        </button>
      </div>

      {/* Contenedor de la tabla */}
      <div className="bg-white shadow-md rounded-md p-6 pt-6 relative z-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">Administradores registrados</h2>

        <div className="overflow-x-auto rounded">
          <table className="w-full text-sm text-left text-gray-800 border-collapse">
            <thead className="bg-gray-100 text-xs uppercase text-gray-600 border-b">
              <tr>
                <th className="p-3"><input type="checkbox" /></th>
                <th className="p-3">Acciones</th>
                <th className="p-3">Nombre</th>
                <th className="p-3">Edad</th>
                <th className="p-3">Adulto</th>
                <th className="p-3">Cumpleaños</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((admin) => (
                <tr key={admin.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                  <td className="p-3">{admin.nombre}</td>
                  <td className="p-3">{admin.edad}</td>
                  <td className="p-3">
                    <input type="checkbox" checked={admin.adulto} readOnly />
                  </td>
                  <td className="p-3">{admin.cumple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div>
            Filas:{" "}
            <select className="border rounded px-1 py-0.5 ml-1">
              <option>5</option>
            </select>
          </div>
          <div>
            {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, administradores.length)} de {administradores.length}
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setPage(0)}
              disabled={page === 0}
              className={`text-gray-600 ${page === 0 && "opacity-30 cursor-not-allowed"}`}
            >
              ⏮️
            </button>
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={`text-gray-600 ${page === 0 && "opacity-30 cursor-not-allowed"}`}
            >
              ◀️
            </button>
            <button
              onClick={handleNext}
              disabled={(page + 1) * rowsPerPage >= administradores.length}
              className={`text-gray-600 ${(page + 1) * rowsPerPage >= administradores.length && "opacity-30 cursor-not-allowed"}`}
            >
              ▶️
            </button>
            <button
              onClick={() => setPage(Math.floor(administradores.length / rowsPerPage))}
              disabled={(page + 1) * rowsPerPage >= administradores.length}
              className={`text-gray-600 ${(page + 1) * rowsPerPage >= administradores.length && "opacity-30 cursor-not-allowed"}`}
            >
              ⏭️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminsTable;
