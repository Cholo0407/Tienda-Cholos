const salesController = {};
import salesModel from "../models/Sales.js"

// SELECT
salesController.getSales = async (req, res) => {
    const saleDetails = await salesModel.find();
    res.json(saleDetails);
};

// INSERT
salesController.creatSales = async (req, res) => {
    const { paymentMethod, state, date, addres, idCustomer, saleDetail, total } = req.body;
    const newSales = new salesModel({ paymentMethod, state, date, addres, idCustomer, saleDetail, total });
    await newSales.save();
    res.json({ message: "sale saved" });
};


export default salesController;