// src/hooks/useAddToCart.js
import { useAuth } from "../context/AuthToken";
import axios from "axios";
import { toast } from "react-toastify";

const useAddToCart = () => {
  const { user } = useAuth();

  const addToCart = async (product, selectedSize, quantity = 1) => {
    if (!user?.id) {
      toast.error("Debes iniciar sesión para agregar productos al carrito.");
      return;
    }
    try {
      // 1️⃣ Intentar obtener carrito existente del usuario
      const { data: existingCart } = await axios.get(
        `http://localhost:4000/api/SaleDetails?customer=${user.id}`,
        { withCredentials: true }
      );

      const subtotal = product.price * quantity;

      if (existingCart?.length > 0) {
        const cart = existingCart[0];
        // Si ya existe el producto en el carrito, solo actualizar cantidad/subtotal
        const updatedProducts = [...cart.products];
        const idx = updatedProducts.findIndex(p => p.idProduct === product._id);
        if (idx !== -1) {
          updatedProducts[idx].quantity += quantity;
          updatedProducts[idx].subtotal += subtotal;
        } else {
          updatedProducts.push({
            idProduct: product._id,
            quantity,
            subtotal
          });
        }

        const newTotal = updatedProducts.reduce((sum, p) => sum + p.subtotal, 0);

        await axios.put(
          `http://localhost:4000/api/SaleDetails/${cart._id}`,
          { idCustomer: user.id, products: updatedProducts, total: newTotal },
          { withCredentials: true }
        );
        toast.success("Carrito actualizado correctamente!");

      } else {
        // No existía, crear carrito nuevo
        const newCart = {
          idCustomer: user.id,
          products: [{
            idProduct: product._id,
            quantity,
            subtotal
          }],
          total: subtotal,
          state: "pendiente"
        };
        await axios.post(
          "http://localhost:4000/api/SaleDetails/",
          newCart,
          { withCredentials: true }
        );
        toast.success("Producto agregado al carrito!");
      }
    } catch (err) {
      console.error("Error agregando al carrito:", err);
      toast.error("No se pudo agregar al carrito.");
    }
  };

  return { addToCart };
};

export default useAddToCart;
