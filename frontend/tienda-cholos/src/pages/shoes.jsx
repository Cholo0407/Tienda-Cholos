import React, { useState } from 'react';
import Footer from "../components/Footer";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductCard from "../components/ProductCard";
import nike from '../images/nike.png'; 

function Shoes() {
  // Estado para gestionar el filtro de orden de precio seleccionado (por defecto vacío)
  const [selectedPriceOrder, setSelectedPriceOrder] = useState("");

  // Estado para controlar qué secciones del filtro están abiertas (expandidas) o cerradas
  const [openSections, setOpenSections] = useState({
    CATEGORÍA: true,  
    GÉNERO: false,    
    MARCA: false,     
    COLOR: false,     
    PRECIO: false,    
  });

  // Función para alternar entre abrir o cerrar una sección de filtros
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,  // Mantiene el estado anterior de las secciones
      [section]: !prev[section],  // Cambia el estado de la sección que se pasa como parámetro
    }));
  };

  return (
    <div>
      <div className="min-h-screen bg-white text-black pt-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full gap-6">
            {/* Componente de filtros separado */}
            {/* Pasa el estado de las secciones abiertas y la función toggleSection al componente FiltersSidebar */}
            <FiltersSidebar
              openSections={openSections}
              toggleSection={toggleSection}
              selectedPriceOrder={selectedPriceOrder}
              setSelectedPriceOrder={setSelectedPriceOrder}
            />

            {/* Cuadrícula de productos */}
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Muestra múltiples tarjetas de productos, en este caso con el mismo producto de ejemplo */}
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} image={nike} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Componente Footer que se muestra al final de la página */}
      <Footer />
    </div>
  );
}

export default Shoes;
