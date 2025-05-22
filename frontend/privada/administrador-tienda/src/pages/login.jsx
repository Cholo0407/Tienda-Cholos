import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { useAuth } from "../Context/AuthToken";
import { Toaster, toast } from "react-hot-toast";
import PasswordBox from "../components/PasswordTextBox";
import Logo from "../images/logo.jpg";

const Login = () => {
  const { login } = useAuth();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    const success = await login(email, password);  
    if (success) {
      toast.success("Inicio de sesión exitoso.");
      navigate("/dashboard"); 
    } else {
      toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-poppins">
      <img src={Logo} alt="Cholos Logo" className="w-40 mb-6" />
      <h2 className="text-2xl font-bold mb-1">INICIO DE SESIÓN</h2>
      <span className="text-gray-500 mb-6">Administrador</span>

      <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-gray-700 mb-1 font-medium">Correo</label>
          <TextBox
            type="text"
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
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" />
            Recordar usuario
          </label>
          <a href="/recovery" className="hover:underline">Recuperar contraseña</a>
        </div>
        <Button text="Iniciar sesión" onClick={handleSubmit} />
      </form>

      <a href="#" className="mt-6 text-gray-500 text-sm hover:underline">
        Términos y condiciones
      </a>
    </div>
  );
};

export default Login;
