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
            phone
        });

        await newAdmin.save();

        // Crear token
        jsonwebtoken.sign(
            { id: newAdmin._id, userType: "admin" },
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
                message: "Admin registrado exitosamente",
                user: {
                    userType: "admin",
                    id: newAdmin._id,
                    email: newAdmin.email,
                },
                });
            }
        );

    } catch (error) {
        console.log("Registration error:", error);
        res.json({ message: "Admin registration error" });
    }
};

export default registerAdminController;
