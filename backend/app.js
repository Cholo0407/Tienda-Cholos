import express from "express";
import modelsRoutes from "./src/routes/models.js"
import shoesRoutes from "./src/routes/shoes.js"

const app = express();

app.use(express.json());
app.use("/api/models",modelsRoutes);
app.use("/api/shoes",shoesRoutes);

export default app;