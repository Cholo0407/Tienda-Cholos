import React from 'react';

export default function ShoeCard({ shoe, onEdit, onDelete }) {
  // Handlers for edit and delete actions
  const handleEdit = () => {
    if (onEdit) {
      onEdit(shoe);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(shoe.id);
    }
  };

  return (
    <div className="relative mb-12 w-full">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={shoe.image} 
          alt={shoe.name} 
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button 
            className="focus:outline-none hover:opacity-80 transition-opacity"
            onClick={handleEdit}
            aria-label="Editar producto"
          >
            <img src={shoe.editIcon} alt="Editar" className="h-6 w-6" />
          </button>
          <button 
            className="focus:outline-none hover:opacity-80 transition-opacity"
            onClick={handleDelete}
            aria-label="Eliminar producto"
          >
            <img src={shoe.deleteIcon} alt="Eliminar" className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute top-10 right-2 bg-white bg-opacity-80 px-2 py-1 rounded text-xs text-gray-600">
          Stock: {shoe.stock}
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="text-sm font-medium text-black">{shoe.name}</h3>
        <p className="text-xs text-gray-500">{shoe.color}</p>
        <p className="text-sm font-medium text-black mt-1">$ {parseFloat(shoe.price).toFixed(2)}</p>
      </div>
    </div>
    
  );
}