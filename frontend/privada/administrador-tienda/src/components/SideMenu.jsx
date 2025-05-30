import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Package, Users, ShieldCheck, Layers, LogOut } from 'lucide-react';
import axios from "axios";
import logo from '../images/logo.jpg';
import { useAuth } from "../Context/AuthToken";  // Importa el contexto

const SideMenu = () => {
  const { user } = useAuth(); // Obtiene el usuario del contexto
  const navigate = useNavigate();
  const { logOut } = useAuth(); // importa logOut del contexto

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/logout", {}, { withCredentials: true });
      if (response.status === 200) {
        logOut(); // elimina localStorage y limpia estado
        navigate("/login");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };


  // Filtramos los items según el tipo de usuario
  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard className="w-6 h-6" />, text: 'DASHBOARD', route: '/dashboard' },
    { id: 'products', icon: <Package className="w-6 h-6" />, text: 'PRODUCTOS', route: '/products' },
    { id: 'clients', icon: <Users className="w-6 h-6" />, text: 'CLIENTES', route: '/customers' },
    // Solo mostramos este item si el usuario es admin
    ...(user?.userType === "admin" ? [{ id: 'admins', icon: <ShieldCheck className="w-6 h-6" />, text: 'ADMINS', route: '/admins' }] : []),
    { id: 'models', icon: <Layers className="w-6 h-6" />, text: 'MODELOS', route: '/models' },
  ];

  return (
    <div className="h-screen w-52 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="p-4 flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
        </div>

        <div className="mt-6">
          {menuItems.map((item) => (
            <NavLink
              to={item.route}
              key={item.id}
              className={({ isActive }) =>
                `flex items-center pl-6 py-3 w-full transition-colors ${
                  isActive ? 'border-l-4 border-teal-500 bg-gray-50' : ''
                }`
              }
            >
              <div className="mr-4 text-gray-500 group-hover:text-teal-500">{item.icon}</div>
              <div className="text-sm tracking-wider text-gray-500 group-hover:text-teal-500">
                {item.text}
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div onClick={handleLogout} className="flex items-center pl-6 py-3 w-full text-gray-500 hover:text-red-500 transition-colors cursor-pointer">
          <LogOut className="w-6 h-6 mr-4" />
          <span className="text-sm tracking-wider">Cerrar Sesión</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
