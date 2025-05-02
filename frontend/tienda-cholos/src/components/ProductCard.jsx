import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, color, price, image }) => {
  return (
    <Link to="/product">
      <div id="card-hover" className="flex flex-col w-full bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
        {/* Imagen del producto recibida como prop */}
        <img src={image} alt={name} className="w-full mb-3 rounded" />
        <div className="px-3 pb-3 text-left">
          <h3 className="font-medium text-sm text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{color}</p>
          <p className="font-bold mt-1 text-black">$ {price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
