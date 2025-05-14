import { useState } from 'react';
import ShoeCard from '../components/Products/CardsPro';

export default function ShoeStore() {
  const [shoes] = useState([
    {
      id: 1,
      name: 'Vans old school',
      color: 'black white',
      price: 99.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 2,
      name: 'Vans old school',
      color: 'black white',
      price: 99.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 3,
      name: 'Nike Air force 1',
      color: 'blanca',
      price: 100.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 4,
      name: 'Nike Air force 1',
      color: 'blanca',
      price: 100.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 5,
      name: 'Adidas Samba OG',
      color: 'blanca',
      price: 90.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    },
    {
      id: 6,
      name: 'Adidas Samba OG',
      color: 'blanca',
      price: 90.00,
      stock: 14,
      image: '/api/placeholder/120/80'
    }
  ]);

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="grid grid-cols-2 gap-4 p-4">
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
}