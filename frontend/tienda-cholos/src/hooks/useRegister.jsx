import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const register = async (form) => {
    const { name, mail, phone, password, age } = form;

    // Validaciones básicas
    if (!name || !mail || !phone || !password || !age) {
      toast.error("Completa todos los campos.");
      return false;
    }

    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber < 14) {
      toast.error("La edad debe ser un número mayor o igual a 14.");
      return false;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/api/customers",
        {
          name,
          mail,
          phone,
          password,
          age: ageNumber,
          isVerified: false,
          issnumber: ""
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      toast.success("Registro exitoso. Inicia sesión.");
      navigate("/login");
      setLoading(false);
      return true;

    } catch (error) {
      setLoading(false);
      const message = error.response?.data?.message || "Ocurrió un error al registrarse.";
      toast.error(message);
      return false;
    }
  };

  return { register, loading };
}
