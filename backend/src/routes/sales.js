import express from "express";
import saleSalesController from "../controllers/SalesController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(saleSalesController.getSales)
  .post(saleSalesController.creatSales);


export default router;