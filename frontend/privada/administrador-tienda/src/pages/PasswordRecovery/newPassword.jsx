import React, { useState } from "react";
import Button from "../../components/Button";
import PasswordBox from "../../components/PasswordTextBox";
import Logo from "../../images/logo.jpg";
import { useNavigate } from "react-router-dom";


const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-poppins">
      <img src={Logo} alt="Cholos Logo" className="w-40 mb-6" />
      <h2 className="text-3xl font-bold mb-1 text-center">CAMBIAR<br />CONTRASEÑA</h2>
      <span className="text-gray-500 mb-8 text-center">Administrador</span>
      <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={handleChangePassword}>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Contraseña</label>
          <PasswordBox
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Confirmar contraseña</label>
          <PasswordBox
            placeholder="********"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div><div></div>
        <Button text="Cambiar contraseña"/>
      </form>
    </div>
  );
};

export default ChangePassword;
