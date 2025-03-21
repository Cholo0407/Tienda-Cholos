import express from "express";
import saleDetailsRoutes from "./src/routes/saleDetails.js"
import salesDetails from "./src/routes/sales.js"


const app = express();

app.use(express.json());

app.use("/api/SaleDetails", saleDetailsRoutes)
app.use("/api/Sales", salesDetails)


export default app;