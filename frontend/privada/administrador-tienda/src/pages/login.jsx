import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import PasswordBox from "../components/PasswordTextBox";
import { toast } from "react-hot-toast";
import Logo from "../images/logo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api/login";

      const { data } = await axios.post(
        API_URL,
        { email, password },
        { withCredentials: true }
      );

      if (!data || data.success === false) {
        throw new Error(data.message || "Credenciales inválidas");
      }

      if (!data?.user?.userType) {
        throw new Error("Respuesta inválida del servidor");
      }

      // Aquí puedes guardar el token o user info si es necesario
      toast.success("Inicio de sesión exitoso.");
      navigate("/dashboard");

    } catch (error) {
      console.error("Error en login:", error);
      const message = error.response?.data?.message || error.message || "Error al iniciar sesión.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-poppins">
      <img src={Logo} alt="Logo" className="w-40 mb-6" />
      <h2 className="text-2xl font-bold mb-1">INICIO DE SESIÓN</h2>
      <span className="text-gray-500 mb-6">Administrador</span>

      <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-gray-700 mb-1 font-medium">Correo</label>
          <TextBox
            type="email"
            placeholder="Introduce tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1 font-medium">Contraseña</label>
          <PasswordBox
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" />
            Recordar usuario
          </label>
          <a href="/recovery" className="hover:underline">Recuperar contraseña</a>
        </div>
        <Button text={isLoading ? "Cargando..." : "Iniciar sesión"} onClick={handleSubmit} disabled={isLoading} />
      </form>

      <a href="#" className="mt-6 text-gray-500 text-sm hover:underline">
        Términos y condiciones
      </a>
    </div>
  );
};

export default Login;
