import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import nike from '../images/nike.png';

function Shoes() {
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(""); // Nuevo estado para controlar la selección
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

  const CheckboxOption = ({ label, checked, onChange }) => (
    <div className="flex items-center py-1">
      <input
        type="checkbox"
        className="custom-checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label} className="ml-2 text-sm text-gray-600">
        {label}
      </label>
    </div>
  );

 const ProductCard = ({ name, color, price }) => {
    const routeName = name.toLowerCase().replace(/\s+/g, '-');
    const shoeColor = color.toLowerCase().replace(/\s+/g, '-')
  
    return (
      <Link to="/product">
        <div id="card-hover" className="flex flex-col w-full bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
          <img src={nike} alt={name} className="w-full mb-3 rounded" />
          <div className="px-3 pb-3 text-left">
            <h3 className="font-medium text-sm text-gray-900">{name}</h3>
            <p className="text-xs text-gray-500">{color}</p>
            <p className="font-bold mt-1 text-black">$ {price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    );
  };
  

  return (
    <div className="min-h-screen bg-white text-black pt-20 px-6 pb-12">
      <style>
        {`
        .custom-checkbox {
            appearance: none;
            -webkit-appearance: none;
            background-color: #fff;
            border: 2px solid #ccc;
            padding: 6px;
            border-radius: 4px;
            display: inline-block;
            position: relative;
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .custom-checkbox:checked {
            background-color: #008A90;
            border-color: #008A90;
        }

        .custom-checkbox:checked::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 6px;
            width: 4px;
            height: 9px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        #card-hover:hover {
            transform: scale(1.01);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        `}
      </style>

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
              {/* Cambiado aquí para controlar la selección única */}
              <CheckboxOption
                label="MAYOR A MENOR"
                checked={selectedPriceOrder === "MAYOR A MENOR"}
                onChange={() => setSelectedPriceOrder("MAYOR A MENOR")}
              />
              <CheckboxOption
                label="MENOR A MAYOR"
                checked={selectedPriceOrder === "MENOR A MAYOR"}
                onChange={() => setSelectedPriceOrder("MENOR A MAYOR")}
              />
            </FilterAccordion>
          </div>

          {/* Cuadrícula de productos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />
                <ProductCard name="Nike Air Force One" color="White" price={90.0} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoes;
