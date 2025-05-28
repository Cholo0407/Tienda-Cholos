import React, { useState } from "react";
import ModelsTable from "../components/modelsComponents/ModelsTable";
import AgregarModels from "./AgregarModels";

// Componente principal que muestra la tabla de modelos y un botón para agregar nuevos modelos
const Models = () => {
  // Estado para controlar la visibilidad del modal de agregar modelos
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative max-w-6xl mx-auto px-4 mt-20">
      {/* Botón flotante para abrir el formulario de agregar modelo */}
      <div className="absolute -top-14 left-6 z-20">
        <button
          onClick={() => setShowModal(true)} // Al hacer clic, se muestra el modal
          className="bg-black hover:bg-gray-800 text-white font-bold w-10 h-10 rounded-full text-2xl flex items-center justify-center shadow-md transition-transform hover:scale-110"
          title="Agregar modelo"
        >
          +
        </button>
      </div>

      {/* Componente que muestra la tabla de modelos existentes */}
      <ModelsTable />

      {/* Modal para agregar un nuevo modelo, visible solo si showModal es true */}
      {showModal && <AgregarModels onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Models;
