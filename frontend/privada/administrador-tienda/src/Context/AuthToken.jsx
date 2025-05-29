import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Nuevo método login: solicita al backend
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        { email, password },
        { withCredentials: true } // importante para enviar/recibir cookies
      );

      if (response.data.success) {
        const loggedUser = response.data.user;
        localStorage.setItem("user", JSON.stringify(loggedUser));
        setUser(loggedUser);
        setIsLoggedIn(true);
        toast.success("Inicio de sesión exitoso.");
        return true;
      } else {
        toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
        return false;
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      toast.error("Error al iniciar sesión. Intenta más tarde.");
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
