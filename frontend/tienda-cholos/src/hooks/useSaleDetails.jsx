import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthToken"; // Ajusta si tienes otro contexto

export function useSaleDetails() {
  const { user } = useAuth();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.id) {
      setLoading(false);
      return;
    }

    async function fetchCart() {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:4000/api/SaleDetails?customer=${user.id}`,
          { withCredentials: true }
        );

        if (res.data.length > 0) {
          setCart(res.data[0]);
        } else {
          setCart(null);
        }
      } catch (e) {
        setError("No se pudo cargar el carrito");
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, [user]);

  return { cart, loading, error };
}
