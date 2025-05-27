import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Swal from "sweetalert2";

export default function AgregarAdministrador() {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate("/admins");
  };

  const handleGuardar = async (e) => {
    e.preventDefault();

    const resultado = await Swal.fire({
      title: '¿Confirmar?',
      text: '¿Desea agregar este administrador?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    });

    if (resultado.isConfirmed) {
      // Simular éxito
      await Swal.fire({
        title: '¡Administrador agregado!',
        icon: 'success',
        confirmButtonText: 'De acuerdo',
        confirmButtonColor: '#3085d6'
      });

      // Redirigir de regreso
      navigate("/admins");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full px-6 py-6">
      {/* Botón volver */}
      <div>
        <button
          onClick={handleVolver}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronDown className="transform rotate-90" size={20} />
          <span className="ml-2 text-sm">Volver al menú principal</span>
        </button>
      </div>

      {/* Contenedor del formulario con margen superior */}
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-8">Agregar administradores</h2>

          <form onSubmit={handleGuardar} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Introduzca el nombre del administrador"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Apellido</label>
              <input
                type="text"
                placeholder="Introduzca el apellido del administrador"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Número de teléfono</label>
              <input
                type="text"
                placeholder="****"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Correo</label>
              <input
                type="email"
                placeholder="Introducir el correo del administrador"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            {/* Botón */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full py-2 px-6 text-sm transition-colors"
              >
                Guardar información
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
