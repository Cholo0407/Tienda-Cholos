import express from "express";

import adminCon from "../controllers/adminsControllers.js";

const router=express.Router();

router
.route("/")
.get(adminCon.getAdmins)
.post(adminCon.postAdmins);



router
.route("/:id")
.delete(adminCon.deleteAdmins)
.put(adminCon.putAdmins);

export default router;