import { useState } from 'react';
import ShoeCard from '../components/Products/CardsPro';

export default function ShoeStore() {
  const [shoes] = useState([
    {
      id: 1,
      name: 'Vans Old School',
      color: 'Black White',
      price: 99.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 2,
      name: 'Vans Old School',
      color: 'Black White',
      price: 99.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 3,
      name: 'Nike Air Force 1',
      color: 'Blanca',
      price: 100.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 4,
      name: 'Nike Air Force 1',
      color: 'Blanca',
      price: 100.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 5,
      name: 'Adidas Samba OG',
      color: 'Blanca',
      price: 90.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 6,
      name: 'Adidas Samba OG',
      color: 'Blanca',
      price: 90.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    }
  ]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Header with store name */}
      <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold">Sneaker Haven</h1>
        <p className="text-gray-300 text-sm">Premium footwear collection</p>
      </header>
      
      {/* Main content */}
      <main className="flex-grow p-6">
        {/* Category title */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Featured Sneakers</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mt-1"></div>
        </div>
        
        {/* Shoes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6 text-center">
        <p className="text-sm">© 2025 Sneaker Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}