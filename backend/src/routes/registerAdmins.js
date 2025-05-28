import express from "express";
import registerAdminsController from "../controllers/registerAdminsController.js";

const router = express.Router();

router.route("/").post(registerAdminsController.register);

export default router;