import adminModel from "../models/admins.js"; 
import bcryptjs from "bcryptjs"; // Encriptar contraseña
import jsonwebtoken from "jsonwebtoken"; // Generar token
import { config } from "../config.js"; 

const registerAdminController = {};

registerAdminController.register = async (req, res) => {
    const { name, password, email, age, phone } = req.body;

    try {
        // Verificar si el admin ya existe
        const adminExist = await adminModel.findOne({ email });
        if (adminExist) {
            return res.json({ message: "Admin already exists" });
        }

        // Encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10);

        // Crear nuevo admin
        const newAdmin = new adminModel({
            name,
            password: passwordHash,
            email,
            age,
            phone
        });

        await newAdmin.save();

        // Crear token
        jsonwebtoken.sign(
            { id: newAdmin._id }, // Datos a guardar en el token
            config.JWT.secret,    // Clave secreta
            { expiresIn: config.JWT.expires }, // Tiempo de expiración
            (error, token) => {
                if (error) {
                    console.log("Token error:", error);
                    return res.json({ message: "Token generation failed" });
                }

                res.cookie("adminAuthToken", token);
                res.json({ message: "Admin registered successfully" });
            }
        );
    } catch (error) {
        console.log("Registration error:", error);
        res.json({ message: "Admin registration error" });
    }
};

export default registerAdminController;
