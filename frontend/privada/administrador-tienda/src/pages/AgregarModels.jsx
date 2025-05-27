import React, { useState } from "react";
import Swal from "sweetalert2";

// Componente que muestra un formulario para agregar o actualizar un modelo
const AgregarModels = ({ onClose }) => {
  // Estados locales para los campos del formulario
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  // Función que maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Mostrar cuadro de confirmación con SweetAlert2
    const result = await Swal.fire({
      title: "¿Confirmar?",
      text: `¿Deseas agregar el modelo "${name}" con categoría "${category}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#14b8a6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, guardar",
      cancelButtonText: "Cancelar",
    });

    // Si el usuario confirma, mostrar mensaje de éxito
    if (result.isConfirmed) {
      await Swal.fire({
        icon: "success",
        title: "Modelo agregado",
        text: `Nombre: ${name}\nCategoría: ${category}`,
        confirmButtonColor: "#14b8a6",
      });

      // Limpiar los campos del formulario
      setName("");
      setCategory("");

      // Cerrar el modal
      onClose();
    }
  };

  return (
    // Fondo semitransparente para el modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm"
      onClick={(e) => {
        // Cierra el modal si se hace clic fuera del cuadro blanco
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Contenedor principal del modal */}
      <div
        className="bg-white rounded-md p-6 w-full max-w-md shadow-md relative"
        onClick={(e) => e.stopPropagation()} // Evita el cierre al hacer clic dentro del modal
      >
        {/* Botón para cerrar el modal */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Título del formulario */}
        <h2 className="text-lg font-semibold mb-4">Agregar/Actualizar Modelo</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Campo: Nombre */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              placeholder="Introduce el nombre del modelo."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Campo: Categoría */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Categoría</label>
            <input
              type="text"
              placeholder="Introduce la categoría del Modelo"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Botón para enviar el formulario */}
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded w-full"
          >
            Guardar información
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarModels;
