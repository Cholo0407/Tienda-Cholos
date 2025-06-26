import bcrypt from "bcryptjs";
import customersModel from "../models/customers.js";

const customersCon = {};

// Obtener todos los clientes
customersCon.getCustomers = async (req, res) => {
  try {
    const customers = await customersModel.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener clientes", error });
  }
};

// Registrar nuevo cliente
customersCon.postCustomers = async (req, res) => {
  try {
    const { name, password, mail, age, phone } = req.body;

    if (!name || !password || !mail || !age || !phone) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    const exists = await customersModel.findOne({ mail });
    if (exists) {
      return res.status(400).json({ message: "Este correo ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoCustomer = new customersModel({
      name,
      password: hashedPassword,
      mail,
      age,
      phone
    });

    await nuevoCustomer.save();

    res.status(201).json({ message: "Cliente registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar cliente", error });
  }
};

// Eliminar cliente
customersCon.deleteCustomer = async (req, res) => {
  try {
    const deleted = await customersModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cliente", error });
  }
};

// Actualizar cliente
customersCon.putCustomer = async (req, res) => {
  try {
    const { name, password, mail, age, phone } = req.body;

    const customer = await customersModel.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const updatedFields = {
      name,
      mail,
      age,
      phone
    };

    // Si se envía una nueva contraseña, se hashea
    if (password) {
      updatedFields.password = await bcrypt.hash(password, 10);
    }

    const updated = await customersModel.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({ message: "Cliente actualizado correctamente", updated });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cliente", error });
  }
};

export default customersCon;
