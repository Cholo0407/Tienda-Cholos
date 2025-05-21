import React, { useRef, useState } from "react";
import { ChevronDown, AlertCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Modelos por marca
const modelosPorMarca = {
  Nike: ["Air Force 1", "Air Max", "Cortez", "Jordan 1"],
  Adidas: ["Superstar", "Ultraboost", "Stan Smith", "NMD"],
  Puma: ["Suede", "RS-X", "Cali", "Future Rider"],
  "New Balance": ["574", "990", "327", "1080"],
  Converse: ["Chuck Taylor", "One Star", "Run Star Hike"],
  Vans: ["Old Skool", "Sk8-Hi", "Authentic", "Slip-On"],
};

export default function AgregarProducto() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [imagen, setImagen] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState("Nike");
  
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagen(URL.createObjectURL(e.target.files[0]));
    }
  };
  
  const handleGuardar = (e) => {
    e.preventDefault();
    
    // Using SweetAlert2 for confirmation dialog
    Swal.fire({
      title: '¿Confirmar?',
      text: '¿Deseas agregar este producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        // Show success message
        Swal.fire({
          title: '¡Producto agregado!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      }
    });
  };
  
  const handleVolver = () => {
    // Navigate back to the products page
    navigate("/products");
  };
  
  const handleMarcaChange = (e) => {
    setMarcaSeleccionada(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button 
          onClick={handleVolver}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronDown className="transform rotate-90" size={20} />
          <span className="ml-1 text-sm">Volver al menu principal</span>
        </button>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-medium">Agregar un nuevo producto</h2>
      </div>
      
      {/* Form container */}
      <div className="w-full">
        {/* Image upload */}
        <div 
          onClick={handleImageClick} 
          className="border-2 border-dashed border-gray-300 rounded w-24 h-24 mb-4 flex flex-col items-center justify-center cursor-pointer"
        >
          {imagen ? (
            <img src={imagen} alt="Vista previa" className="w-full h-full object-cover" />
          ) : (
            <>
              <div className="w-12 h-12 border border-black rounded flex items-center justify-center">
                <img src="/api/placeholder/40/40" alt="Subir" className="w-6 h-6" />
              </div>
              <span className="text-xs mt-1">Suba las imágenes aquí</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>
        
        {/* Form grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm mb-1">Nombre</label>
            <input 
              type="text" 
              placeholder="Introduce el nombre del producto" 
              className="w-full border border-gray-300 rounded p-2 text-sm"
              required 
            />
          </div>
          
          {/* Descripción */}
          <div className="row-span-2">
            <label className="block text-sm mb-1">Descripción</label>
            <textarea 
              placeholder="Introduce la descripción del producto" 
              className="w-full border border-gray-300 rounded p-2 h-32 text-sm resize-none"
              required 
            />
          </div>
          
          {/* Color */}
          <div>
            <label className="block text-sm mb-1">Color</label>
            <input 
              type="text" 
              placeholder="Introduce el color del producto" 
              className="w-full border border-gray-300 rounded p-2 text-sm"
              required 
            />
          </div>
          
          {/* Precio */}
          <div>
            <label className="block text-sm mb-1">Precio</label>
            <input 
              type="text" 
              placeholder="*****" 
              className="w-full border border-gray-300 rounded p-2 text-sm"
              required 
            />
          </div>
          
          {/* Stock */}
          <div>
            <label className="block text-sm mb-1">Stock</label>
            <input 
              type="number" 
              placeholder="Introduce el stock del producto" 
              className="w-full border border-gray-300 rounded p-2 text-sm"
              required 
            />
          </div>
          
          {/* Marca */}
          <div>
            <label className="block text-sm mb-1">Marca</label>
            <div className="relative">
              <select 
                value={marcaSeleccionada} 
                onChange={handleMarcaChange}
                className="w-full border border-gray-300 rounded p-2 pr-8 text-sm appearance-none"
                required
              >
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
                <option value="New Balance">New Balance</option>
                <option value="Converse">Converse</option>
                <option value="Vans">Vans</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
          
          {/* Descuento */}
          <div>
            <label className="block text-sm mb-1">Descuento</label>
            <div className="flex">
              <input 
                type="number" 
                placeholder="%"
                className="w-16 border border-gray-300 rounded p-2 text-sm"
              />
            </div>
          </div>
          
          {/* Modelo */}
          <div>
            <label className="block text-sm mb-1">Modelo</label>
            <div className="relative">
              <select 
                className="w-full border border-gray-300 rounded p-2 pr-8 text-sm appearance-none"
                required
              >
                <option value="">Modelo del zapato</option>
                {modelosPorMarca[marcaSeleccionada].map((modelo) => (
                  <option key={modelo} value={modelo}>
                    {modelo}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
          
          {/* Tallas */}
          <div>
            <label className="block text-sm mb-1">Tallas disponibles</label>
            <input 
              type="text" 
              placeholder="Introduce la tallas del producto" 
              className="w-full border border-gray-300 rounded p-2 text-sm"
            />
          </div>
          
          {/* Button */}
          <div className="col-span-1 mt-4">
            <button 
              onClick={handleGuardar}
              className="bg-teal-500 text-white rounded py-2 px-4 w-full text-sm hover:bg-teal-600"
            >
              Guardar información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}