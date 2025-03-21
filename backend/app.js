import express from "express";
import adminsRoute from "./src/routes/adminds.js"
import customerRoute from "./src/routes/customer.js"

const app = express();

app.use(express.json());

app.use("/api/admins",adminsRoute);
app.use("/api/customers",customerRoute);

export default app;