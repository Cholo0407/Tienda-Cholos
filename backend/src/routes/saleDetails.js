import express from "express";
import saleDetailsController from "../controllers/saleDetailsController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(saleDetailsController.getSaleDetails)
  .post(saleDetailsController.creatSaleDetails);

router
  .route("/:id")
  .put(saleDetailsController.updateSaleDetails)
  .delete(saleDetailsController.deleteSaleDetails);

export default router;