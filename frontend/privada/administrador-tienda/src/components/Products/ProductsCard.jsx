import React from 'react';

function ProductsCard({ shoe, onEdit, onDelete }) {
  return (
    <div
      className="flex bg-white rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50 cursor-pointer p-3"
    >
      <div className="flex flex-col items-center">
        <img src={shoe.images} alt={shoe.name} className="w-24 h-24 object-contain" />
        <div className="mt-2 text-center">
          <h3 className="font-medium">{shoe.name}</h3>
          <p className="text-gray-500 text-sm">
            {Array.isArray(shoe.colors) ? shoe.colors.join(', ') : shoe.colors || 'Sin color'}
          </p>
          <p className="font-bold mt-1">$ {shoe.price?.toFixed(2)}</p>
        </div>
      </div>

      <div className="ml-auto flex flex-col justify-between items-end">
        <div className="flex space-x-2 mb-2">
          <button
            onClick={() => onEdit(shoe)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(shoe._id)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500">Stock: {shoe.stock}</p>
      </div>
    </div>
  );
}

export default ProductsCard;
