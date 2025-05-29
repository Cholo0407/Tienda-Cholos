import React from 'react';
import ProductsCard from './ProductsCard';

function ProductsList({ shoes, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {shoes.map((shoe) => (
        <ProductsCard
          key={shoe._id}
          shoe={shoe}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductsList;
