import express from "express";
import adminsRoute from "./src/routes/adminds.js"

const app = express();

app.use(express.json());

app.use("/api/admins",adminsRoute);

export default app;