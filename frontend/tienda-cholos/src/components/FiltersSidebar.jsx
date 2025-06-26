import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

const FilterAccordion = ({ title, isOpen, toggleSection, children }) => (
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

const FiltersSidebar = ({
  openSections,
  toggleSection,
  selectedPriceOrder,
  setSelectedPriceOrder,
  updateFilters,
  filters
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir el panel en móviles */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 text-sm font-medium text-teal-600 border border-teal-600 px-3 py-2 rounded"
        >
          <Filter size={16} />
          {mobileOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </button>
      </div>

      {/* Sidebar visible solo en desktop o cuando está abierto en móvil */}
      <div className={`${mobileOpen ? 'block' : 'hidden'} md:block w-full md:w-64 pr-4 border-r border-gray-200`}>
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
          `}
        </style>

        <h2 className="text-xl font-bold mb-4 text-teal-600">Filtros</h2>

        {/* GÉNERO */}
        <FilterAccordion title="GÉNERO" isOpen={openSections["GÉNERO"]} toggleSection={toggleSection}>
          {["hombre", "mujer", "unisex"].map(value => (
            <CheckboxOption
              key={value}
              label={value.toUpperCase()}
              checked={filters.gender.includes(value)}
              onChange={() => updateFilters("gender", value)}
            />
          ))}
        </FilterAccordion>

        {/* COLOR */}
        <FilterAccordion title="COLOR" isOpen={openSections["COLOR"]} toggleSection={toggleSection}>
          {['negro', 'blanco', 'azul', 'rojo', 'verde', 'gris', 'amarillo', 'marrón', 'rosa', 'multicolor'].map(value => (
            <CheckboxOption
              key={value}
              label={value.toUpperCase()}
              checked={filters.color.includes(value)}
              onChange={() => updateFilters("color", value)}
            />
          ))}
        </FilterAccordion>

        {/* PRECIO */}
        <FilterAccordion title="PRECIO" isOpen={openSections["PRECIO"]} toggleSection={toggleSection}>
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
    </>
  );
};

export default FiltersSidebar;
