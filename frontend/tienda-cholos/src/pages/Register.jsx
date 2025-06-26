import { useState, useEffect } from "react";
import { Mail, Lock, User, Phone, Calendar } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    mail: "",
    phone: "",
    password: "",
    age: ""
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { name, mail, phone, password, age } = form;

    // Validaciones básicas
    if (!name || !mail || !phone || !password || !age) {
      toast.error("Completa todos los campos.");
      return;
    }

    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber < 14) {
      toast.error("La edad debe ser un número mayor o igual a 14.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/customers",
        {
          name,
          mail,
          phone,
          password,
          age: ageNumber,
          // Por si tu modelo lo necesita
          isVerified: false,
          issnumber: "" // Puedes omitir si no es obligatorio
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Respuesta del servidor:", response.data);
      toast.success("Registro exitoso. Inicia sesión.");
      navigate("/login");

    } catch (error) {
      console.error("Error al registrar:", error.response?.data || error.message);

      const message = error.response?.data?.message || "Ocurrió un error al registrarse.";
      toast.error(message);
    }
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

          <button onClick={handleRegister} className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800">
            Registrarse
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
