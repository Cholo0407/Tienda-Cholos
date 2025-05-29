import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const rowsPerPage = 5;

const AdminsTable = () => {
  const [page, setPage] = useState(0);
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  // Obtener admins al montar el componente
  useEffect(() => {
    let isMounted = true;

    axios
      .get("http://localhost:4000/api/admins", { withCredentials: true })
      .then((response) => {
        if (isMounted) {
          if (Array.isArray(response.data)) {
            setAdmins(response.data);
          } else {
            console.error("Respuesta inesperada:", response.data);
            setAdmins([]);
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener administradores:", error);
        if (isMounted) setAdmins([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Eliminar admin
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:4000/api/admins/${id}`, {
            withCredentials: true,
          })
          .then(() => {
            setAdmins(admins.filter((admin) => admin._id !== id));
            Swal.fire(
              "Eliminado",
              "Administrador eliminado correctamente",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error al eliminar el administrador:", error);
            Swal.fire("Error", "No se pudo eliminar el administrador", "error");
          });
      }
    });
  };

  // Datos de la página actual
  const currentData = admins.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div className="relative max-w-6xl mx-auto px-4 mt-20">
      <div className="absolute -top-14 left-6 z-20">
        <button
          onClick={() => navigate("/administradores/crear")}
          className="bg-black hover:bg-gray-800 text-white font-bold w-10 h-10 rounded-full text-2xl flex items-center justify-center shadow-md transition-transform hover:scale-110"
          title="Agregar administrador"
        >
          +
        </button>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 pt-6 relative z-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">
          Administradores registrados
        </h2>

        <div className="overflow-x-auto rounded">
          <table className="w-full text-sm text-left text-gray-800 border-collapse">
            <thead className="bg-gray-100 text-xs uppercase text-gray-600 border-b">
              <tr>
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Acciones</th>
                <th className="p-3">Nombre</th>
                <th className="p-3">Disponible</th>
                <th className="p-3">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((admin) => (
                <tr key={admin._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(admin._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                  <td className="p-3">{admin.name}</td>
                  <td className="p-3">
                    <input type="checkbox" checked={admin.adulto} readOnly />
                  </td>
                  <td className="p-3">{admin.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div>
            Filas:{" "}
            <select className="border rounded px-1 py-0.5 ml-1">
              <option>5</option>
            </select>
          </div>
          <div>
            {page * rowsPerPage + 1}-
            {Math.min((page + 1) * rowsPerPage, admins.length)} de{" "}
            {admins.length}
          </div>
          <div className="space-x-2">
            <button onClick={() => setPage(0)} disabled={page === 0}>
              ⏮️
            </button>
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
              ◀️
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={(page + 1) * rowsPerPage >= admins.length}
            >
              ▶️
            </button>
            <button
              onClick={() =>
                setPage(Math.floor(admins.length / rowsPerPage))
              }
              disabled={(page + 1) * rowsPerPage >= admins.length}
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
