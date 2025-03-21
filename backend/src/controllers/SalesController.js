const salesController = {};
import salesModel from "../models/Sales.js"

// SELECT
salesController.getSales = async (req, res) => {
    const saleDetails = await salesModel.find();
    res.json(saleDetails);
};

// INSERT
salesController.creatSales = async (req, res) => {
    const { paymentMethod, date, addres, idSaleDetail, total, state } = req.body;
    const newSales = new salesModel({ paymentMethod, date, addres, idSaleDetail, total, state });
    await newSales.save();
    res.json({ message: "sale saved" });
};


export default salesController;