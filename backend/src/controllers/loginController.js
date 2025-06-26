import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import adminModel from "../models/admins.js";
import customersModel from "../models/customers.js";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let userFound;
    let userType;

    // Verificar si es el administrador principal
    if (email === config.ADMIN.email && password === config.ADMIN.pass) {
      userFound = { _id: "main_admin", email };
      userType = "admin";
    } else {
      // Buscar en Admins
      userFound = await adminModel.findOne({ email });

      if (userFound) {
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
          return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
        }
        userType = "employee";
      } else {
        // Buscar en Customers
        userFound = await customersModel.findOne({ mail: email });

        if (!userFound) {
          return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
          return res.status(401).json({ success: false, message: "Contraseña incorrecta" });
        }

        userType = "customer";
      }
    }

    // Generar token
    jsonwebtoken.sign(
      { id: userFound._id, userType },
      config.JWT.secret,
      { expiresIn: config.JWT.expires },
      (error, token) => {
        if (error) {
          console.error("Error al generar token:", error);
          return res.status(500).json({ success: false, message: "Error al generar token" });
        }

        res.cookie("authToken", token, { httpOnly: true });
        return res.status(200).json({
          success: true,
          message: "Inicio de sesión exitoso",
          user: {
            userType,
            id: userFound._id,
            email: userFound.email || userFound.mail,
          },
        });
      }
    );
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};

export default loginController;
