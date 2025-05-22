import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Renombramos 'Login' a 'login'
  const login = async (email, password) => {
    if (!email || !password) {
      toast.error("Por favor, complete los campos.");
      return false; 
    } else if (email === "correo@correo.com" && password === "123456") {
      localStorage.setItem("user", JSON.stringify({ email }));
      setUser({ email });
      setIsLoggedIn(true);
      toast.success("Inicio de sesión exitoso.");
      return true;
    } else {
      toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
      setIsLoggedIn(false);
      return false;
    }
  };

  const logOut = () => {
    try {
      localStorage.removeItem("user");
      setUser(null);
      setIsLoggedIn(false);
      toast.success("Sesión cerrada.");
      return true;
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      toast.error("Error al cerrar sesión.");
      return false;
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logOut, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
