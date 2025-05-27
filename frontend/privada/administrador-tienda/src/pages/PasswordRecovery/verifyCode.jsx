import React, { useState } from "react";
import Button from "../../components/Button";
import TextBox from "../../components/TextBox";
import Logo from "../../images/logo.jpg"; 
import { useNavigate } from "react-router-dom";


const VerifyCode = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();
  
    const handleSendCode = (e) => {
      e.preventDefault(); // Evita que el formulario recargue la página
      navigate("/newPassword"); 
    };
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white font-poppins">
        <img src={Logo} alt="Cholos Logo" className="w-40 mb-10" />
        <h2 className="text-3xl font-bold mb-1 text-center">¡CORREO ENVIADO <br />EXITOSAMENTE!</h2><br />
        <span className="text-gray-500 mb-6 text-center">
            Se envio un código de verificacion  <br />
            a tu correo electronico asociado con tu cuenta
        </span>
        <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={handleSendCode}>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 font-medium">Código</label>
            <TextBox
              type="text"
              placeholder="Introduce tu código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <br />
          </div>
          <Button text="Verificar código" onClick={handleSendCode} />
        </form>
      </div>
    );
};

export default VerifyCode;
