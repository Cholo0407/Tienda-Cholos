import { useState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import skate from '../images/skater.png';
import logo from '../images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../Context/AuthToken";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home"); // redirigir si ya estaba logueado
    }

    window.scrollTo({ top: window.innerHeight / 8 });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoggedIn, navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Completa todos los campos.");
      return;
    }

    const success = await login(email, password);
    if (success) {
      navigate("/home");
    } else {
      toast.error("Credenciales incorrectas.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins bg-white">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">INICIAR SESIÓN</h2>
          <p className="text-sm text-gray-500 mb-4">Bienvenidos a Cholo’s, el estilo que pisa fuerte</p>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 text-left block">Correo</label>
              <div className="flex items-center border rounded px-3 py-2 mt-1 border-[#C4C4C4]">
                <Mail className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Introduce tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 text-left block">Contraseña</label>
              <div className="flex items-center border rounded px-3 py-2 mt-1 border-[#C4C4C4]">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-sm"
                />
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-xs text-gray-500 hover:text-black">¿Olvidaste tu contraseña?</a>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
            >
              Iniciar sesión
            </button>

            <br /><br />
            <p className="text-sm text-center text-gray-500">
              ¿No tienes cuenta todavía?{" "}
              <Link to="/register" className="text-gray-700 underline">Regístrate gratis</Link>
            </p>
          </div>

          <p className="text-xs text-center text-gray-400 mt-6">Términos y condiciones</p>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 relative">
        <img src={skate} alt="Skater" className="w-full h-screen object-cover" />
        <img src={logo} alt="Logo Cholos" className="absolute top-4 right-4 w-16 h-16" />
      </div>
    </div>
  );
};

export default Login;
