import { useState } from 'react';
import Vans from '../images/Vans.jpg'
import Nike from '../images/Nike.jpg'
import Samba from '../images/Samba.jpg'
export default function ShoeStore() {
  const [shoes] = useState([
    {
      id: 1,
      name: 'Vans old school',
      color: 'Black white',
      price: 99.00,
      stock: 14,
      image:  Vans
    },
    {
      id: 2,
      name: 'Vans old school',
      color: 'Black white',
      price: 99.00,
      stock: 14,
      image: Vans
    },
    {
      id: 3,
      name: 'Nike Air force 1',
      color: 'blanca',
      price: 100.00,
      stock: 14,
      image: Nike
    },
    {
      id: 4,
      name: 'Nike Air force 1',
      color: 'blanca',
      price: 100.00,
      stock: 14,
      image: Nike
    },
    {
      id: 5,
      name: 'Adidas Samba OG',
      color: 'blanca',
      price: 80.00,
      stock: 14,
      image: Samba
    },
    {
      id: 6,
      name: 'Adidas Samba OG',
      color: 'blanca',
      price: 80.00,
      stock: 14,
      image: Samba
    }
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Lista de productos */}
      <div className="flex flex-col w-full">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="flex items-start border-b border-gray-100 py-4 px-4">
            {/* Imagen del producto (lado izquierdo) */}
            <div className="mr-4">
              <img 
                src={shoe.image} 
                alt={shoe.name} 
                className="w-16 h-16 object-contain"
              />
            </div>
            
            {/* Información del producto (centro) */}
            <div className="flex-grow">
              <h3 className="text-base font-normal text-black">{shoe.name}</h3>
              <p className="text-sm text-gray-400">{shoe.color}</p>
              <p className="text-base font-normal text-black mt-1">$ {shoe.price.toFixed(2)}</p>
            </div>
            
            {/* Botones de acción (lado derecho) y Stock */}
            <div className="flex flex-col items-end">
              <div className="text-sm text-gray-400 mb-2">
                Stock: {shoe.stock}
              </div>
              <div className="flex space-x-2">
                <button className="focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="h-6 w-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="h-6 w-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}