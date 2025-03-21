import express from "express";
import shoesController from "../controllers/shoesController.js";

const router = express.Router();

router
  .route("/")
  .get(shoesController.getshoes)
  .post(shoesController.createshoes);

router
  .route("/:id")
  .put(shoesController.updateshoes)
  .delete(shoesController.deletedshoes);

export default router;