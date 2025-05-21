import React from 'react';
import ShoeCard from '../Products/CardsPro';

export default function ShoeList({ shoes, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 p-4 max-w-3xl mx-auto">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="w-full">
          <ShoeCard 
            shoe={shoe} 
            onEdit={onEdit} 
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}