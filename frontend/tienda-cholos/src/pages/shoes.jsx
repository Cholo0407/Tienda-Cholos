import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Shoes() {
  const [priceValue, setPriceValue] = useState(1000);
  const [openSections, setOpenSections] = useState({
    CATEGORÍA: true,
    GÉNERO: false,
    MARCA: false,
    COLOR: false,
    PRECIO: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const FilterAccordion = ({ title, children }) => {
    const isOpen = openSections[title];
    return (
      <div className="border-b border-gray-200 py-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection(title)}
        >
          <h3 className="font-semibold text-sm uppercase text-gray-700">{title}</h3>
          {isOpen ? <ChevronUp size={16} color="#4B5563" /> : <ChevronDown size={16} color="#4B5563" />}
        </div>
        {isOpen && <div className="pt-2 pb-1">{children}</div>}
      </div>
    );
  };

  const CheckboxOption = ({ label }) => (
    <div className="flex items-center py-1">
      <input type="checkbox" className="mr-2 accent-teal-500" />
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );

  const ProductCard = ({ name, color, price }) => (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <img src="/api/placeholder/200/120" alt={name} className="w-full mb-3 rounded" />
      <h3 className="font-medium text-sm text-gray-900">{name}</h3>
      <p className="text-xs text-gray-500">{color}</p>
      <p className="font-bold mt-1 text-teal-600">$ {price.toFixed(2)}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black pt-20 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Sidebar de filtros */}
          <div className="w-full md:w-64 pr-4 border-r border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-teal-600">Filtros</h2>

            <FilterAccordion title="CATEGORÍA">
              <CheckboxOption label="RUNNING" />
              <CheckboxOption label="CASUAL" />
              <CheckboxOption label="FÚTBOL" />
              <CheckboxOption label="LIFESTYLE" />
            </FilterAccordion>

            <FilterAccordion title="GÉNERO">
              <CheckboxOption label="HOMBRE" />
              <CheckboxOption label="MUJER" />
            </FilterAccordion>

            <FilterAccordion title="MARCA">
              <CheckboxOption label="VANS" />
              <CheckboxOption label="NIKE" />
              <CheckboxOption label="PUMA" />
              <CheckboxOption label="ADIDAS" />
              <CheckboxOption label="NEW BALANCE" />
              <CheckboxOption label="CONVERSE" />
            </FilterAccordion>

            <FilterAccordion title="COLOR">
              {['NEGRO', 'BLANCO', 'AZUL', 'ROJO', 'VERDE', 'GRIS', 'AMARILLO', 'MARRÓN', 'ROSA', 'MULTICOLOR'].map((color) => (
                <CheckboxOption key={color} label={color} />
              ))}
            </FilterAccordion>

            <FilterAccordion title="PRECIO">
              <CheckboxOption label="MAYOR A MENOR" />
              <CheckboxOption label="MENOR A MAYOR" />
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1 text-gray-500">
                  <span>${priceValue}</span>
                  <span>$2000+</span>
                </div>
                <input
                  type="range"
                  className="w-full accent-teal-500"
                  min="0"
                  max="2000"
                  value={priceValue}
                  onChange={(e) => setPriceValue(parseInt(e.target.value))}
                />
              </div>
            </FilterAccordion>
          </div>

          {/* Cuadrícula de productos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard name="Vans old school" color="Black white" price={99.0} />
              <ProductCard name="Vans old school" color="Black white" price={99.0} />
              <ProductCard name="Vans old school" color="Black white" price={99.0} />
              <ProductCard name="Nike Air force 1" color="White" price={100.0} />
              <ProductCard name="Nike Air force 1" color="White" price={100.0} />
              <ProductCard name="Nike Air force 1" color="White" price={100.0} />
              <ProductCard name="Adidas Samba OG" color="White" price={90.0} />
              <ProductCard name="Adidas Samba OG" color="White" price={90.0} />
              <ProductCard name="Adidas Samba OG" color="White" price={90.0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoes;
