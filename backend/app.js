import express from "express";
import adminsRoute from "./src/routes/adminds.js"
import customerRoute from "./src/routes/customer.js"
import saleDetailsRoutes from "./src/routes/saleDetails.js"
import salesDetails from "./src/routes/sales.js"


const app = express();

app.use(express.json());

app.use("/api/admins",adminsRoute);
app.use("/api/customers",customerRoute);
app.use("/api/SaleDetails", saleDetailsRoutes)
app.use("/api/Sales", salesDetails)


export default app;