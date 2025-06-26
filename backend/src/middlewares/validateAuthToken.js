import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

export const validateAuthToken = (allowedUserTypes = []) => {
  return (req, res, next) => {
    try {
      const { authToken } = req.cookies;

      if (!authToken) {
        return res.status(401).json({ message: "No auth token found, you must login" });
      }

      const decoded = jsonwebtoken.verify(authToken, config.JWT.secret);

      if (!allowedUserTypes.includes(decoded.userType)) {
        return res.status(403).json({ message: "Access denied" });
      }

      // Guardar info del usuario para usar después en req
      req.user = { id: decoded.id, userType: decoded.userType };

      next();
    } catch (error) {
      console.log("error " + error);
      res.status(401).json({ message: "Token inválido" });
    }
  };
};
