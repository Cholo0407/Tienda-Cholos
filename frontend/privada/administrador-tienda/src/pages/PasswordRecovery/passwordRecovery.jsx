import React, { useState } from "react";
import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import Logo from "../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    navigate("/verifyCode"); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-poppins">
      <img src={Logo} alt="Cholos Logo" className="w-40 mb-10" />
      <h2 className="text-3xl font-bold mb-1 text-center">RECUPERAR<br />CONTRASEÑA</h2><br />
      <span className="text-gray-500 mb-6 text-center">
        Introduce el correo con el que te <br />registraste en la cuenta.
      </span>
      <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={handleSendCode}>
        <div className="mb-2">
          <label className="block text-gray-700 mb-1 font-medium">Correo</label>
          <TextBox
            type="text"
            placeholder="Introduce tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>
        <Button text="Enviar código" onClick={handleSendCode} />
      </form>
    </div>
  );
};

export default PasswordRecovery;
