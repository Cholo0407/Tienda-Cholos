import React from "react";
import { useNavigate } from "react-router-dom"; 
import { ChevronDown } from "lucide-react";     // Ícono para botón de volver
import Swal from "sweetalert2";                 // Librería para alertas modernas

// Componente principal para agregar un nuevo administrador
export default function AgregarAdministrador() {
  const navigate = useNavigate(); // Hook de navegación

  // Función para volver a la vista de administradores
  const handleVolver = () => {
    navigate("/admins");
  };

  // Función que maneja el envío del formulario
  const handleGuardar = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Confirmación previa al guardado usando SweetAlert2
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

    // Si el usuario confirma, se muestra una alerta de éxito y se redirige
    if (resultado.isConfirmed) {
      await Swal.fire({
        title: '¡Administrador agregado!',
        icon: 'success',
        confirmButtonText: 'De acuerdo',
        confirmButtonColor: '#3085d6'
      });

      navigate("/admins"); // Redirige al listado de administradores
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full px-6 py-6">
      {/* Botón para volver al menú principal */}
      <div>
        <button
          onClick={handleVolver}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronDown className="transform rotate-90" size={20} />
          <span className="ml-2 text-sm">Volver al menú principal</span>
        </button>
      </div>

      {/* Contenedor principal del formulario */}
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-8">Agregar administradores</h2>

          {/* Formulario con dos columnas en pantallas medianas */}
          <form onSubmit={handleGuardar} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo: Nombre */}
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Introduzca el nombre del administrador"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            {/* Campo: Apellido */}
            <div>
              <label className="block text-sm mb-1">Apellido</label>
              <input
                type="text"
                placeholder="Introduzca el apellido del administrador"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            {/* Campo: Teléfono */}
            <div>
              <label className="block text-sm mb-1">Número de teléfono</label>
              <input
                type="text"
                placeholder="****"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            {/* Campo: Correo */}
            <div>
              <label className="block text-sm mb-1">Correo</label>
              <input
                type="email"
                placeholder="Introducir el correo del administrador"
                className="w-full border border-gray-300 rounded p-2 text-sm"
                required
              />
            </div>

            {/* Botón para enviar el formulario */}
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
