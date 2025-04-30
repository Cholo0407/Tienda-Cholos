import { useState } from 'react';
import { ShoppingCart, Search, User, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import nike from '../images/Air1.avif';
import nike2 from '../images/Air2.avif';
import nike3 from '../images/Air3.avif';
import nike4 from '../images/Air4.avif';
import Footer from "../components/Footer";


export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = {
    name: "Nike Air force 1",
    description: "Cómodo, duradero y atemporal: es el número uno por una razón. La clásica construcción de los 80 combina cuero suave con detalles llamativos para un estilo que acompaña tanto a la cancha como a la calle.",
    price: 100.00,
    size: ["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    idModel: "AF1-2020",
    idBrand: "NIK-001",
    stock: 3,
    gender: "Unisex",
    releaseDate: "12/09/2020",
    color: "White", 
    images: [nike, nike2, nike3, nike4],
    sale: false
  };

  return (
    <div className="min-h-screen bg-white pt-20 px-6 pb-12">
      <div className="max-w-6xl mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Imagenes del prducto */}
          <div className="flex justify-center relative">
            <img 
              src={product.images[currentImageIndex]} 
              alt={`${product.name} - ${currentImageIndex + 1}`} 
              className="max-w-full h-auto"
            />
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={() => setCurrentImageIndex((prev) => prev === 0 ? product.images.length - 1 : prev - 1)}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            
            {/* Indicadores de foto */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <span 
                  key={index} 
                  className={`h-2 w-2 ${index === currentImageIndex ? 'bg-teal-500' : 'bg-gray-300'} rounded-full cursor-pointer`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div>
            <p className="text-gray-500 text-lg">{product.color}</p>
            
            {/* Tallas*/}
            <div className="mt-6 rounded-md p-4 mb-6 border border-black">
              <div className="relative w-full h-14">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-medium pointer-events-none">
                  Size:
                </div>
                <select
                  className="absolute inset-0 w-full h-full pl-20 pr-10 text-right rounded appearance-none cursor-pointer text-lg bg-transparent"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="" disabled hidden>Selecciona</option>
                  {product.size.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3.5 h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* Boton de comprar ahora y añadir al carrito*/}
            <div className="border border-black rounded-md p-4">
              {/* Precio*/}
              <div className="mb-4">
                <div className="flex items-center">
                  <p className="text-2xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Precio: ${product.price.toFixed(2)}
                  </p>
                  {product.sale && (
                    <span className="ml-3 bg-red-500 text-white text-xs px-2 py-1 rounded">OFERTA</span>
                  )}
                </div>
                {product.stock <= 5 && product.stock > 0 && (
                  <p className="text-red-500 text-sm mt-1">¡Solo quedan {product.stock} unidades!</p>
                )}
                {product.stock === 0 && (
                  <p className="text-red-500 text-sm mt-1">Agotado</p>
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-3">Opciones de compra</h3>
              <div className="flex space-x-4">
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center justify-center flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Agregar
                </button>
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex-1">
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* descripción del producto*/}
        <div className="mt-8 border-t border-b border-gray-200 py-6">
          <p className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {product.description}
          </p>
        </div>

        {/* Detalles del producto*/}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Detalles del producto</h2>
          <div className="space-y-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex justify-between">
              <span className="text-gray-700">Color</span>
              <span className="text-right">{product.color}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Gender</span>
              <span className="text-right">{product.gender}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Release date</span>
              <span className="text-right">{product.releaseDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Brand</span>
              <span className="text-right">Nike</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Model</span>
              <span className="text-right">Air force</span>
            </div>
            {product.stock > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-700">Stock</span>
                <span className="text-right">{product.stock} unidades</span>
              </div>
            )}
            {product.sale && (
              <div className="flex justify-between">
                <span className="text-gray-700">Oferta</span>
                <span className="text-right text-red-500">¡En oferta!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}