import React, { useState } from 'react';
import Footer from "../components/Footer";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductCard from "../components/ProductCard";
import { Link, useNavigate } from 'react-router-dom';
import useFetchShoes from '../hooks/useFetchShoes'; // <-- importa aquí

function Shoes() {
  const [selectedPriceOrder, setSelectedPriceOrder] = useState("");
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: [],
    gender: [],
    brand: [],
    color: [],
  });

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


  const handleProductClick = (shoe) => {
    navigate(`/shoes/${shoe._id}`, { state: { product: shoe } });
  };


  const updateFilters = (type, value) => {
    setFilters((prev) => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const { shoes, loading, error } = useFetchShoes(filters, selectedPriceOrder);

  return (
    <div>
      <div className="min-h-screen bg-white text-black pt-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full gap-6">
            <FiltersSidebar
              openSections={openSections}
              toggleSection={toggleSection}
              selectedPriceOrder={selectedPriceOrder}
              setSelectedPriceOrder={setSelectedPriceOrder}
              updateFilters={updateFilters}
              filters={filters}
            />

            <div className="flex-1">
              {loading && <p>Cargando zapatos...</p>}
              {error && <p>Error al cargar: {error.message}</p>}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shoes.map((shoe) => (
                  <ProductCard
                    key={shoe._id}
                    name={shoe.name}
                    color={shoe.colors?.[0] || "N/A"}
                    price={shoe.price}
                    sale={shoe.sale}
                    image={shoe.images}
                    onClick={() => handleProductClick(shoe)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shoes;
