const saleDetailsController = {};
import saleDetailsModel from "../models/SaleDetails.js"

// SELECT
saleDetailsController.getSaleDetails = async (req, res) => {
    const saleDetails = await saleDetailsModel.find().populate('products.idProduct');
    res.json(saleDetails);
};

//SELECT or UPDATE
saleDetailsController.addOrUpdateSaleDetails = async (req, res) => {
  try {
    // Obtener idCustomer del token decodificado
    const idCustomer = req.user.id;

    // Desestructurar producto y cantidad desde body
    const { idProduct, quantity, subtotal } = req.body;

    if (!idProduct || !quantity || !subtotal) {
      return res.status(400).json({ message: "Faltan datos necesarios" });
    }

    // Buscar carrito activo para el cliente
    let cart = await saleDetailsModel.findOne({ idCustomer, state: "pending" });

    if (!cart) {
      // Crear nuevo carrito
      const newCart = new saleDetailsModel({
        idCustomer,
        products: [{ idProduct, quantity, subtotal }],
        total: subtotal,
        state: "pending",
      });

      await newCart.save();
      return res.status(201).json({ message: "Carrito creado", cart: newCart });
    } else {
      // Actualizar carrito existente
      const productIndex = cart.products.findIndex(p => p.idProduct.toString() === idProduct);

      if (productIndex > -1) {
        // Si el producto ya está, actualizar cantidad y subtotal
        cart.products[productIndex].quantity += quantity;
        cart.products[productIndex].subtotal += subtotal;
      } else {
        // Agregar nuevo producto
        cart.products.push({ idProduct, quantity, subtotal });
      }

      // Recalcular total
      cart.total = cart.products.reduce((acc, p) => acc + p.subtotal, 0);

      await cart.save();
      return res.status(200).json({ message: "Carrito actualizado", cart });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};


// INSERT
saleDetailsController.creatSaleDetails = async (req, res) => {
    const { idCustomer, products, total, state } = req.body;
    const newDetails = new saleDetailsModel({ idCustomer, products, total, state });
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