import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthToken";
import axios from "axios";

const useLogout = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/logout", {}, { withCredentials: true });
      if (response.status === 200) {
        logOut();           // Limpia localStorage y contexto
        navigate("/login");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return handleLogout;
};

export default useLogout;
