import { useState, useEffect } from "react";
import { Mail, Lock, User, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    phone: "",
    password: "",
    age: ""
  });

  const { register, loading } = useRegister();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    register(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-poppins bg-white">
      <div className="w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-1">REGISTRARSE</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">Sé parte del estilo que pisa fuerte.</p>

        <div className="space-y-4">
          <InputField label="Nombre completo" icon={<User />} name="name" value={form.name} onChange={handleChange} placeholder="Introduce tu nombre completo" />
          <InputField label="Correo" icon={<Mail />} name="mail" value={form.mail} onChange={handleChange} placeholder="Introduce tu correo" type="email" />
          <InputField label="Teléfono" icon={<Phone />} name="phone" value={form.phone} onChange={handleChange} placeholder="Introduce tu teléfono" type="tel" />
          <InputField label="Edad" icon={<Calendar />} name="age" value={form.age} onChange={handleChange} placeholder="Introduce tu edad (mínimo 14)" type="number" min={14} />
          <InputField label="Contraseña" icon={<Lock />} name="password" value={form.password} onChange={handleChange} placeholder="********" type="password" />

          <button
            onClick={handleRegister}
            className={`w-full py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-gray-700 hover:bg-gray-800"}`}
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>

          <p className="text-sm text-center text-gray-500 mt-3">
            ¿Tienes cuenta? <Link to="/login" className="text-gray-700 underline">Iniciar sesión</Link>
          </p>
        </div>

        <p className="text-xs text-center text-gray-400 mt-6">Términos y condiciones</p>
      </div>
    </div>
  );
};

// Componente InputField reutilizable
const InputField = ({ label, icon, name, value, onChange, placeholder, type = "text", min }) => (
  <div>
    <label className="text-sm text-gray-700 block mb-1">{label}</label>
    <div className="flex items-center gap-3 border rounded px-3 py-2 border-[#C4C4C4]">
      <div className="text-gray-500 text-lg">{icon}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className="w-full outline-none text-sm"
      />
    </div>
  </div>
);

export default Register;
