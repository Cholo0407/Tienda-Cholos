import React, { useState } from "react";
import ModelsTable from "../components/modelsComponents/ModelsTable";
import AgregarModels from "./AgregarModels";

const Models = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative max-w-6xl mx-auto px-4 mt-20">
      {/* Botón flotante */}
      <div className="absolute -top-14 left-6 z-20">
        <button
          onClick={() => setShowModal(true)}
          className="bg-black hover:bg-gray-800 text-white font-bold w-10 h-10 rounded-full text-2xl flex items-center justify-center shadow-md transition-transform hover:scale-110"
          title="Agregar modelo"
        >
          +
        </button>
      </div>

      <ModelsTable />

      {showModal && <AgregarModels onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Models;
