import express from "express";
import customersCon from "../controllers/customersControllers.js";

const router = express.Router();

router.route("/")
  .get(customersCon.getCustomers)
  .post(customersCon.postCustomers); 

router.route("/:id")
  .put(customersCon.putCustomer)
  .delete(customersCon.deleteCustomer);

export default router;