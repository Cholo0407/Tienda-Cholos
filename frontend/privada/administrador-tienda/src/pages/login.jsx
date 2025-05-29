import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../Context/AuthToken"; // importa tu hook del contexto
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import PasswordBox from "../components/PasswordTextBox";
import Logo from "../images/logo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();  // accede al método login del contexto

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
      const success = await login(email, password);  // usa el login del contexto
      if (success) {
        toast.success("Inicio de sesión exitoso.");
        navigate("/dashboard");
      } else {
        toast.error("Credenciales incorrectas.");
      }
    } catch (error) {
      console.error("Error en login:", error);
      toast.error("Error al iniciar sesión.");
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
