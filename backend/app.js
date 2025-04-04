import express from "express";
import saleDetailsRoutes from "./src/routes/saleDetails.js"
import salesDetails from "./src/routes/sales.js"
import modelsRoutes from "./src/routes/models.js"
import shoesRoutes from "./src/routes/shoes.js"

const app = express();

app.use(express.json());
app.use("/api/models",modelsRoutes);
app.use("/api/shoes",shoesRoutes);

app.use("/api/SaleDetails", saleDetailsRoutes)
app.use("/api/Sales", salesDetails)


export default app;