// pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import ProductsList from '../components/Products/ProductsList';

export default function Products() {
  const navigate = useNavigate();
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/shoes', { withCredentials: true })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setShoes(response.data);
        } else {
          console.error("Respuesta inesperada de /api/shoes:", response.data);
          setShoes([]);
        }
      })
      .catch((error) => {
        console.error("Error al obtener zapatos:", error);
        setShoes([]);
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
    navigate(`/products/editar/${shoe._id}`, { state: { shoe } });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/products/AgregarZapato');
  };

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
        <div className="relative">
          <ProductsList
            shoes={shoes}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
}
