import express from "express";
import shoessController from "../controllers/shoesController.js";
import multer from "multer"


const router = express.Router();

const upload= multer({dest: "public/"})


router
  .route("/")
  .get(shoessController.getshoes)
  .post(upload.single("images"),shoessController.createshoes);

router
  .route("/:id")
  .put(upload.single("images"),shoessController.updateshoes)
  .delete(shoessController.deletedshoes);

export default router;