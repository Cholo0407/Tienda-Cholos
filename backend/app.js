import express from "express";
import modelsRoutes from "./src/routes/models.js"
import shoesRoutes from "./src/routes/shoes.js"
import adminsRoute from "./src/routes/adminds.js"
import customerRoute from "./src/routes/customer.js"
import saleDetailsRoutes from "./src/routes/saleDetails.js"
import salesDetails from "./src/routes/sales.js"
import brandsRoute from "./src/routes/brands.js"
import registerAdminsRoutes from "./src/routes/registerAdmins.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import cors from "cors"


const app = express();

app.use(
    cors({
      origin: "http://localhost:5173", 
      credentials: true, 
    })
  );

app.use(express.json());
app.use("/api/models",modelsRoutes);
app.use("/api/shoes",shoesRoutes);

app.use("/api/admins",adminsRoute);
app.use("/api/customers",customerRoute);
app.use("/api/SaleDetails", saleDetailsRoutes)
app.use("/api/Sales", salesDetails)
app.use("/api/brands",brandsRoute);
app.use("/api/registeradmins",registerAdminsRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes)


export default app;