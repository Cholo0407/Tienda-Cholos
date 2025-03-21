import express from "express";
import customersController from "../controllers/modelsController.js";

const router = express.Router();

router
  .route("/")
  .get(modelsController.getmodels)
  .post(modelsController.createmodels);

router
  .route("/:id")
  .put(modelsController.updatemodels)
  .delete(modelsController.deletemodels);

export default router;
