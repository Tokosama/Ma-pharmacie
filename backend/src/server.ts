import express from "express";
import pharmacieRoutes from "./routes/pharmacie.route.js";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API en ligne " });
});

app.use("/api/pharmacies", pharmacieRoutes);

const startServer = () => {
  app.listen(4000, () => {
    console.log("server running ");
  });
};

startServer();
