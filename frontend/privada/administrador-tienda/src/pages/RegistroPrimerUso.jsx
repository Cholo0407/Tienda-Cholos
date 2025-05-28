import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import { Toaster, toast } from "react-hot-toast";
import PasswordBox from "../components/PasswordTextBox";
import Logo from "../images/logo.jpg";

const Register = () => {
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contraseña, setContraseña] = useState("");

  const navigate = useNavigate(); // Hook para redirección

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !telefono || !nombre || !apellido || !contraseña) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const phoneRegex = /^[0-9]{8,}$/;
    if (!phoneRegex.test(telefono)) {
      alert("Por favor, ingresa un teléfono válido.");
      return;
    }

    if (contraseña.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Simula éxito y redirecciona
    alert("¡Registro exitoso!");
    console.log({ correo, telefono, nombre, apellido, contraseña });

    // Redirigir al dashboard
    navigate("/dashboard");
  };

  const goToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo cholo's"
        className="w-32 h-32 mb-6 bg-black rounded-full flex items-center justify-center"
      />

      <h2 className="text-2xl font-bold mb-1 text-gray-800">REGÍSTRATE</h2>
      <span className="text-gray-500 mb-6">por primera vez</span>

      <div className="w-full max-w-sm flex flex-col gap-4">
        <div className="mb-2">
          <label className="block text-gray-700 mb-1 font-medium">Correo</label>
          <TextBox
            type="email"
            placeholder="Introduce tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 mb-1 font-medium">Teléfono</label>
          <TextBox
            type="tel"
            placeholder="Introduce tu teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 mb-1 font-medium">Nombre</label>
          <TextBox
            type="text"
            placeholder="Introduce tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 mb-1 font-medium">Apellido</label>
          <TextBox
            type="text"
            placeholder="Introduce tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 font-medium">Contraseña</label>
          <PasswordBox
            placeholder="********"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <Button text="Registrarse" onClick={handleSubmit} />
      </div>

      <a
        href="#"
        onClick={goToLogin}
        className="mt-6 text-gray-500 text-sm hover:underline"
      >
        ¿Tienes cuenta? Iniciar sesión
      </a>
    </div>
  );
};

export default Register;
