import React from 'react';

const ProductCard = ({ name, color, price, sale = 0, image, onClick }) => {
  const hasDiscount = sale > 0;
  const discountedPrice = hasDiscount
    ? price - (price * sale) / 100
    : price;

  return (
    <div onClick={onClick}>
      <div id="card-hover" className="flex flex-col w-full bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
        <img src={image} alt={name} className="w-full mb-3 rounded" />
        <div className="px-3 pb-3 text-left">
          <h3 className="font-medium text-sm text-gray-900">{name}</h3>
          <p className="text-xs text-gray-500">{color}</p>
          <div className="flex items-center space-x-2">
            {hasDiscount ? (
              <>
                <p className="text-xs line-through text-gray-500">$ {price.toFixed(2)}</p>
                <p className="font-bold text-black">$ {discountedPrice.toFixed(2)}</p>
                <span className="bg-red-400 text-white text-xs px-1 rounded">{sale}% OFF</span>
              </>
            ) : (
              <p className="font-bold mt-1 text-black">$ {price.toFixed(2)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
