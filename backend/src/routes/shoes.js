import express from "express";
import shoessController from "../controllers/shoesController.js";

const router = express.Router();

router
  .route("/")
  .get(shoessController.getshoes)
  .post(shoessController.createshoes);

router
  .route("/:id")
  .put(shoessController.updateshoes)
  .delete(shoessController.deletedshoes);

export default router;