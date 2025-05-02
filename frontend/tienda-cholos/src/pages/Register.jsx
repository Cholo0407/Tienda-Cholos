import { useState, useEffect } from "react";
import { Mail, Lock, User, Phone } from "lucide-react";
import basketball from '../images/basketball.png'; // Imagen tipo portada
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
 const [form, setForm] = useState({
   nombre: "",
   apellido: "",
   correo: "",
   telefono: "",
   contraseña: ""
 });

 useEffect(() => {
   window.scrollTo({ top: window.innerHeight / 8 });
   document.body.style.overflow = "hidden";
   return () => {
     document.body.style.overflow = "auto";
   };
 }, []);

 const handleChange = (e) => {
   setForm({ ...form, [e.target.name]: e.target.value });
 };

 return (
   <div className="min-h-screen flex items-center justify-center font-poppins bg-white">
     {/* Imagen lateral (solo visible en pantallas medianas o más) */}
     <div className="hidden md:block md:w-1/2 relative">
       <img
         src={basketball}
         alt="Basketball"
         className="w-full h-screen object-cover" // Ajuste para ocupar toda la pantalla
       />
       <img
         src={logo}
         alt="Logo Cholos"
         className="absolute top-4 left-4 w-16 h-16"
       />
     </div>

     {/* Formulario */}
     <div className="w-full md:w-1/2 flex items-center justify-center p-6">
       <div className="max-w-md w-full space-y-6">
         <h2 className="text-3xl font-semibold text-gray-800">REGISTRATE</h2>
         <p className="text-sm text-gray-500 mb-4">Serás parte del estilo que pisa fuerte</p>

         <div className="space-y-4">
           <div>
             <label className="text-sm text-gray-700 text-left block">Nombre</label> {/* Alineación a la izquierda */}
             <div className="flex items-center border rounded px-3 py-2 mt-1 border-[#C4C4C4]">
               <User className="w-4 h-4 text-gray-400 mr-2" />
               <input
                 type="text"
                 name="nombre"
                 placeholder="Introduce tu nombre"
                 value={form.nombre}
                 onChange={handleChange}
                 className="w-full outline-none text-sm"
               />
             </div>
           </div>

           <div>
             <label className="text-sm text-gray-700 text-left block">Apellido</label> {/* Alineación a la izquierda */}
             <div className="flex items-center border rounded px-3 py-2 mt-1 border-[#C4C4C4]">
               <User className="w-4 h-4 text-gray-400 mr-2" />
               <input
                 type="text"
                 name="apellido"
                 placeholder="Introduce tu Apellido"
                 value={form.apellido}
                 onChange={handleChange}
                 className="w-full outline-none text-sm"
               />
             </div>
           </div>

           <div>
             <label className="text-sm text-gray-700 text-left block">Correo</label> {/* Alineación a la izquierda */}
             <div className="flex items-center border rounded px-3 py-2 mt-1 border-[#C4C4C4]">
               <Mail className="w-4 h-4 text-gray-400 mr-2" />
               <input
                 type="email"
                 name="correo"
                 placeholder="Introduce tu correo electrónico"
                 value={form.correo}
                 onChange={handleChange}
                 className="w-full outline-none text-sm"
               />
             </div>
           </div>

           <div>
             <label className="text-sm text-gray-700 text-left block">Teléfono</label> {/* Alineación a la izquierda */}
             <div className="flex items-center border rounded px-3 py-2 mt-1 border-[#C4C4C4]">
               <Phone className="w-4 h-4 text-gray-400 mr-2" />
               <input
                 type="text"
                 name="telefono"
                 placeholder="Introduce tu teléfono"
                 value={form.telefono}
                 onChange={handleChange}
                 className="w-full outline-none text-sm"
               />
             </div>
           </div>

           <div>
             <label className="text-sm text-gray-700 text-left block">Contraseña</label> {/* Alineación a la izquierda */}
             <div className="flex items-center border rounded px-3 py-2 mt-1 border-[#C4C4C4]">
               <Lock className="w-4 h-4 text-gray-400 mr-2" />
               <input
                 type="password"
                 name="contraseña"
                 placeholder="********"
                 value={form.contraseña}
                 onChange={handleChange}
                 className="w-full outline-none text-sm"
               />
             </div>
           </div>
            <br />
            <Link to="/">
           <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800">
             Registrarse
           </button>
            </Link>
            <br /><br />
           <p className="text-sm text-center text-gray-500">
             ¿Tienes cuenta?{" "}
             <Link to="/login" className="text-gray-700 underline">
               Iniciar sesión
             </Link>
           </p>
         </div>

         <p className="text-xs text-center text-gray-400 mt-6">Términos y condiciones</p>
       </div>
     </div>
   </div>
 );
};

export default Register;
