// src/hooks/useFetchShoes.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchShoes = (filters, selectedPriceOrder) => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      setLoading(true);
      setError(null);
      try {
        // Convertir arrays a strings separados por comas para la query
        const params = {
          order: selectedPriceOrder,
          category: filters.category.length ? filters.category.join(",") : undefined,
          gender: filters.gender.length ? filters.gender.join(",") : undefined,
          brand: filters.brand.length ? filters.brand.join(",") : undefined,
          color: filters.color.length ? filters.color.join(",") : undefined,
        };

        // Eliminar claves con valor undefined para no enviarlas
        Object.keys(params).forEach(key => params[key] === undefined && delete params[key]);

        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:4000/api/shoes", {
          params,
          withCredentials: true,
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        setShoes(response.data);
      } catch (err) {
        console.error("Error fetching shoes:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, [filters, selectedPriceOrder]);

  return { shoes, loading, error };
};

export default useFetchShoes;
