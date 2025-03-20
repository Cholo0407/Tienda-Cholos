const saleDetailsController = {};
import saleDetailsModel from "../models/SaleDetails.js"

// SELECT
saleDetailsController.getSaleDetails = async (req, res) => {
    const saleDetails = await saleDetailsModel.find();
    res.json(saleDetails);
};

// INSERT
saleDetailsController.creatSaleDetails = async (req, res) => {
    const { idCustomer, products, total } = req.body;
    const newDetails = new saleDetailsModel({ idCustomer, products, total });
    await newDetails.save();
    res.json({ message: "sale Details saved" });
};

// DELETE
saleDetailsController.deleteSaleDetails = async (req, res) => {
    const deleteDetails = await saleDetailsModel.findByIdAndDelete(req.params.id);
    if (!deleteDetails) {
      return res.status(404).json({ message: "Details Not Found :(" });
    }
    res.json({ message: "Details Deleted!" });
};

// UPDATE
saleDetailsController.updateSaleDetails = async (req, res) => {
    // Solicito todos los valores
    const { idCustomer, products, total } = req.body;
    // Actualizo
    await saleDetailsModel.findByIdAndUpdate(
      req.params.id,
      {
        idCustomer, 
        products, 
        total,
      },
      { new: true }
    );
    // muestro un mensaje que todo se actualizo
    res.json({ message: "Details updated" });
};

export default saleDetailsController;