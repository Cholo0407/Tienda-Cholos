import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Footer from "../components/Footer";

export default function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!product) {
      navigate("/products");
    }
  }, [product, navigate]);

  if (!product) return null; 

  const hasDiscount = product.sale > 0;
  const discountedPrice = hasDiscount
    ? product.price - (product.price * product.sale) / 100
    : product.price;

  return (
    <div>
      <div className="min-h-screen bg-white pt-20 px-6 pb-12">
        <div className="max-w-6xl mx-auto p-4 mt-8">
          <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Imagen principal e indicadores */}
            <div className="flex justify-center relative">
              <img
                src={Array.isArray(product.images) ? product.images[currentImageIndex] : product.images}
                alt={`${product.name} - ${currentImageIndex + 1}`}
                className="max-w-full h-auto"
              />
              {Array.isArray(product.images) && product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(prev =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(prev =>
                        (prev + 1) % product.images.length
                      )
                    }
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <span
                        key={index}
                        className={`h-2 w-2 ${index === currentImageIndex ? 'bg-teal-500' : 'bg-gray-300'} rounded-full cursor-pointer`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Detalles */}
            <div>
              <p className="text-gray-500 text-lg">{product.colors?.[0] || product.color || "Color no especificado"}</p>

              {/* Selector de talla */}
              <div className="mt-6 rounded-md p-4 mb-6 border border-black">
                <div className="relative w-full h-14">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-medium pointer-events-none">
                    Talla:
                  </div>
                  <select
                    className="absolute inset-0 w-full h-full pl-20 pr-10 text-right rounded appearance-none cursor-pointer text-lg bg-transparent"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="" disabled hidden>Selecciona</option>
                    {(product.size || []).map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-3.5 h-5 w-5 pointer-events-none" />
                </div>
              </div>

              {/* Precio y botones */}
              <div className="border border-black rounded-md p-4">
                <div className="mb-4">
                  <div className="flex items-center space-x-3">
                    {hasDiscount ? (
                      <>
                        <p className="text-xl text-gray-500 line-through font-poppins">
                          ${product.price.toFixed(2)}
                        </p>
                        <p className="text-2xl font-semibold text-red-600 font-poppins">
                          ${discountedPrice.toFixed(2)}
                        </p>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                          {product.sale}% OFF
                        </span>
                      </>
                    ) : (
                      <p className="text-2xl font-semibold font-poppins">
                        Precio: ${product.price.toFixed(2)}
                      </p>
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

          {/* Descripción */}
          <div className="mt-8 border-t border-b border-gray-200 py-6">
            <p className="text-gray-700 font-poppins">
              {product.description || "Sin descripción disponible"}
            </p>
          </div>

          {/* Detalles adicionales */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Detalles del producto</h2>
            <div className="space-y-2 font-poppins">
              <div className="flex justify-between">
                <span className="text-gray-700">Color</span>
                <span>{product.colors?.[0] || product.color || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Género</span>
                <span>{product.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Fecha de lanzamiento</span>
                <span>{product.releaseDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Marca</span>
                <span>{product.idBrand?.name || "Marca desconocida"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Modelo</span>
                <span>{product.idModel?.name || "Modelo desconocido"}</span>
              </div>
              {product.stock > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-700">Stock</span>
                  <span>{product.stock} </span>
                </div>
              )}
              {hasDiscount && (
                <div className="flex justify-between">
                  <span className="text-gray-700">Oferta</span>
                  <span className="text-red-500">¡En oferta!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
