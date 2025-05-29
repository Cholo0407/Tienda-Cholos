import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import ShoeList from '../components/Products/List.jsx'; // Asegúrate de que la ruta sea correcta

export default function ShoeStore() {
  const navigate = useNavigate();
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/shoes', { withCredentials: true })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setShoes(response.data);
        } else {
          console.error("Respuesta inesperada de /api/shoes:", response.data);
          setShoes([]); // Evita que falle el render
        }
      })
      .catch((error) => {
        console.error("Error al obtener zapatos:", error);
        setShoes([]); // Evita que falle el render
      });
  }, []);
  

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/api/shoes/${id}`, { withCredentials: true })
          .then(() => {
            setShoes(shoes.filter(shoe => shoe._id !== id));
            Swal.fire('Eliminado', 'Zapato eliminado correctamente', 'success');
          })
          .catch((error) => {
            console.error('Error al eliminar zapato:', error);
            Swal.fire('Error', 'No se pudo eliminar el zapato', 'error');
          });
      }
    });
  };

  const handleEdit = (shoe) => {
    navigate(`/editarZapato/${shoe._id}`, { state: { shoe } });
  };

  const handleContinue = (e) => {
<<<<<<< HEAD
  e.preventDefault();
  navigate('/products/AgregarZapato');
};

=======
    e.preventDefault();
    navigate('/products/AgregarZapato');
  };
>>>>>>> 2d4ef1855a6c59062d927141b1b944e4d57143e9

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <header className="bg-white p-4 border-b border-gray-100">
        <div className="w-full flex justify-between items-center px-4">
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

      <main className="flex-1 overflow-y-auto px-4 py-6">
<<<<<<< HEAD
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shoes.map((shoe) => (
              <div
                key={shoe._id}
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
                      onClick={() => handleEdit(shoe)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      {/* icono editar */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(shoe._id)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      {/* icono eliminar */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Stock: {shoe.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
=======
        <ShoeList shoes={shoes} onEdit={handleEdit} onDelete={handleDelete} />
>>>>>>> 2d4ef1855a6c59062d927141b1b944e4d57143e9
      </main>
    </div>
  );
}
