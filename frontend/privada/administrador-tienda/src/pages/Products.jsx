import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Nike from '../images/Nike.jpg';
import Samba from '../images/Samba.jpg';
import vans from '../images/vans.jpg';

export default function ShoeStore() {
  const navigate = useNavigate(); // para redirección

  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: 'Vans old school',
      color: 'Black white',
      price: 99.0,
      stock: 14,
      image: vans
    },
    {
      id: 2,
      name: 'Nike Air force 1',
      color: 'blanco',
      price: 100.0,
      stock: 14,
      image: Nike
    },
    {
      id: 3,
      name: 'Nike Air force 1',
      color: 'blanco',
      price: 100.0,
      stock: 14,
      image: Nike
    },
    {
      id: 4,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.0,
      stock: 14,
      image: Samba
    },
    {
      id: 5,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.0,
      stock: 14,
      image: Samba
    },
    {
      id: 6,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.0,
      stock: 14,
      image: Samba
    },
    {
      id: 7,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.0,
      stock: 14,
      image: Samba
    },
    {
      id: 8,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.0,
      stock: 14,
      image: Samba
    },
    {
      id: 9,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.0,
      stock: 14,
      image: Samba
    }
  ]);

  const handleEdit = (shoe) => {
    Swal.fire({
      title: 'Editar producto',
      text: `Funcionalidad de edición para: ${shoe.name}`,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  };

  const handleDelete = (shoeId) => {
    Swal.fire({
      title: '¿Deseas eliminar este producto?',
      text: 'Esta acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setShoes((prevShoes) => prevShoes.filter((shoe) => shoe.id !== shoeId));
        Swal.fire({
          title: '¡Eliminado!',
          text: 'El producto ha sido eliminado.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // Pass cart data to checkout page
    navigate('AgregarZapato', { 
     
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 border-b border-gray-100">
        <div className="w-full flex justify-between items-center px-4">
          {/* Botón de Agregar Zapato */}
          <button
            onClick={handleContinue}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main content with scroll */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shoes.map((shoe) => (
              <div
                key={shoe.id}
                className="flex bg-white rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50 cursor-pointer p-3"
              >
                <div className="flex flex-col items-center">
                  <img src={shoe.image} alt={shoe.name} className="w-24 h-24 object-contain" />
                  <div className="mt-2 text-center">
                    <h3 className="font-medium">{shoe.name}</h3>
                    <p className="text-gray-500 text-sm">{shoe.color}</p>
                    <p className="font-bold mt-1">$ {shoe.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="ml-auto flex flex-col justify-between items-end">
                  <div className="flex space-x-2 mb-2">
                    <button
                      onClick={() => handleEdit(shoe)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(shoe.id)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Stock: {shoe.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
