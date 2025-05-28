import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { validateAuthToken } from "./src/middleware/validateAuthToken.js";

import modelsRoutes from "./src/routes/models.js";
import shoesRoutes from "./src/routes/shoes.js";
import adminsRoute from "./src/routes/adminds.js";
import customerRoute from "./src/routes/customer.js";
import saleDetailsRoutes from "./src/routes/saleDetails.js";
import salesDetails from "./src/routes/sales.js";
import brandsRoute from "./src/routes/brands.js";
import registerAdminsRoutes from "./src/routes/registerAdmins.js";


const app = express();

app.use(
    cors({
      origin: "http://localhost:5173", 
      credentials: true, 
    })
  );

app.use(express.json());
app.use(cookieParser());

// Public route
app.use("/api/registeradmins", registerAdminsRoutes);

// Protected routes
app.use("/api/models", validateAuthToken(["admin", "employee"]), modelsRoutes);
app.use("/api/shoes", validateAuthToken(["admin", "employee"]), shoesRoutes);
app.use("/api/admins", validateAuthToken(["admin"]), adminsRoute);
app.use("/api/customers", validateAuthToken(["admin", "employee"]), customerRoute);
app.use("/api/SaleDetails", validateAuthToken(["admin", "employee"]), saleDetailsRoutes);
app.use("/api/Sales", validateAuthToken(["admin", "employee"]), salesDetails);
app.use("/api/brands", validateAuthToken(["admin", "employee"]), brandsRoute);


export default app;