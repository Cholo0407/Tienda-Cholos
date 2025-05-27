import React, { useState } from "react";
import Swal from "sweetalert2";

const AgregarModels = ({ onClose }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (result.isConfirmed) {
      await Swal.fire({
        icon: "success",
        title: "Modelo agregado",
        text: `Nombre: ${name}\nCategoría: ${category}`,
        confirmButtonColor: "#14b8a6",
      });

      setName("");
      setCategory("");
      onClose(); // cerrar el modal
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-md p-6 w-full max-w-md shadow-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4">Agregar/Actualizar Modelo</h2>
        <form onSubmit={handleSubmit}>
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
