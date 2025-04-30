import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

export default function ShoppingCart() {
  const initialProducts = [
    { id: 1, name: 'Puma RS-X', price: 193, image: '/api/placeholder/60/60', quantity: 1 },
    { id: 2, name: 'Vans old school', price: 99, image: '/api/placeholder/60/60', quantity: 1 },
    { id: 3, name: 'New Balance 574', price: 59, image: '/api/placeholder/60/60', quantity: 1 }
  ];

  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, delta) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, quantity: Math.max(1, p.quantity + delta) }
          : p
      )
    );
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const serviceCharge = 0.20;
  const total = subtotal + serviceCharge;

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Header */}
      <div className="mb-6">
        <button className="flex items-center text-gray-600 mb-6">
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-semibold">Volver al menu principal</span>
        </button>

        <div className="mb-1">
          <h1 className="text-lg font-semibold text-gray-700">CARRITO DE COMPRAS</h1>
          <p className="text-sm text-gray-500">Tienes {products.length} items</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product List */}
        <div className="flex-1">
          {products.map(product => (
            <div key={product.id} className="border rounded-xl p-4 mb-4 flex items-center shadow-sm">
              <div className="flex-shrink-0 mr-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
              </div>

              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
              </div>

              <div className="flex items-center mr-4">
                <div className="border rounded flex items-center px-2 py-1">
                  <button onClick={() => updateQuantity(product.id, 1)}>
                    <ChevronUp size={16} />
                  </button>
                  <span className="px-2 font-medium">{product.quantity}</span>
                  <button onClick={() => updateQuantity(product.id, -1)}>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              <div className="text-right mr-4 w-16">
                <p className="font-medium">${product.price * product.quantity}</p>
              </div>

              <button className="text-gray-400 hover:text-red-500">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-80">
          <div className="bg-teal-600 text-white rounded-xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-6">Detalles de la venta</h2>

            <div className="mb-2 flex justify-between">
              <span>Productos</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-6">
              <span>Tarifa de servicio</span>
              <span>${serviceCharge.toFixed(2)}</span>
            </div>

            <div className="border-t border-teal-500 pt-4 mb-6 flex justify-between font-medium">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-teal-500 hover:bg-teal-400 py-3 px-4 rounded-lg flex items-center justify-center font-medium">
              <span>Continuar a pagar</span>
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <div>© 2024 Cholo's. Todos los derechos reservados.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-700">Política de privacidad</a>
          <a href="#" className="hover:text-gray-700">Términos y condiciones</a>
        </div>
      </div>
    </div>
  );
}
