import express from "express";
import saleDetailsRoutes from "./src/routes/saleDetails.js"

const app = express();

app.use(express.json());

app.use("/api/SaleDetails", saleDetailsRoutes)

export default app;