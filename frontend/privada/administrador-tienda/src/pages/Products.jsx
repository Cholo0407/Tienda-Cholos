import React, { useState } from 'react';
import Nike from '../images/Nike.jpg'
import basura from '../images/basura.png'
import Samba from '../images/Samba.jpg'
import vans from '../images/vans.jpg'
import editar from '../images/editar.png'



export default function ShoeStore() {
  const [alert, setAlert] = useState({
    show: false,
    title: '',
    message: '',
    onConfirm: null,
    isSuccess: false
  });
  
  // Function to close the alert
  const closeAlert = () => {
    setAlert({
      ...alert,
      show: false
    });
  };
  
  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: 'Vans old school',
      color: 'Black white',
      price: 99.00,
      stock: 14,
      image: vans
    },
    {
      id: 2,
      name: 'Nike Air force 1',
      color: 'blanco',
      price: 100.00,
      stock: 14,
      image: Nike
    },
    {
      id: 3,
      name: 'Nike Air force 1',
      color: 'blanco',
      price: 100.00,
      stock: 14,
      image: Nike
    },
    {
      id: 4,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.00,
      stock: 14,
      image: Samba
    },
    {
      id: 5,
      name: 'Adidas Samba OG',
      color: 'blanco',
      price: 80.00,
      stock: 14,
      image: Samba
    }
  ]);

  const handleEdit = (shoe) => {
    console.log("Editando zapato:", shoe);
  };

  const handleDelete = (shoeId) => {
    // Show custom confirmation alert
    setAlert({
      show: true,
      title: '¿Deseas eliminar este producto?',
      message: 'Esta acción no se puede revertir',
      onConfirm: () => {
        // Remove the shoe from the state
        setShoes(prevShoes => prevShoes.filter(shoe => shoe.id !== shoeId));
        
        // Show success message
        setAlert({
          show: true,
          title: 'Eliminado!',
          message: 'El producto ha sido eliminado.',
          isSuccess: true,
          onConfirm: closeAlert
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Custom Alert Component */}
      {alert.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-xl border border-gray-200">
            <div className="text-center">
              {alert.isSuccess ? (
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              )}}
              <h3 className="text-lg font-medium text-gray-900 mb-2">{alert.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{alert.message}</p>
              <div className="flex justify-center space-x-4">
                {!alert.isSuccess && (
                  <button
                    onClick={closeAlert}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                )}
                <button
                  onClick={() => {
                    if (alert.onConfirm) {
                      alert.onConfirm();
                    } else {
                      closeAlert();
                    }
                  }}
                  className={`px-4 py-2 rounded transition-colors ${
                    alert.isSuccess
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                >
                  {alert.isSuccess ? 'Aceptar' : 'Continuar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white p-4 border-b border-gray-100">
        <div className="w-full flex justify-between items-center px-4">
          <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>
      
      <main className="w-full py-6 px-4">
        <div className="relative">
          <h2 className="text-2xl font-bold mb-6">Nuestros Zapatos</h2>
          
          {/* Grid layout with hover animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shoes.map((shoe) => (
              <div 
                key={shoe.id} 
                className="flex bg-white rounded-lg transition-all duration-300 
                           hover:shadow-lg hover:bg-gray-50 cursor-pointer p-3"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={shoe.image} 
                    alt={shoe.name} 
                    className="w-24 h-24 object-contain"
                  />
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleDelete(shoe.id)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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