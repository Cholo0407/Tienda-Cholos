import expres from "express";
import brandsCon from "../controllers/brandsControllers.js";

const router = expres.Router();

router
.route("/")
.get(brandsCon.getBrands)
.post(brandsCon.postBrands);

router
.route("/:id")
.delete(brandsCon.deleteBrands)
.put(brandsCon.putBrands);

export default router;