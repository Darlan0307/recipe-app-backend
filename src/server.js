import express from "express";
import cors from "cors";
import { routesRecipe } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routesRecipe)

app.get("/", (_, res) => {
  res.json({ message: "running" });
});

const PORT = process.env.PORT || 9005;

app.listen(PORT, () => {
  console.log(`running http://localhost:${PORT}`);
});
