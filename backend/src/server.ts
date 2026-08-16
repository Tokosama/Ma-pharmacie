import express from "express";
import pharmacieRoutes from "./routes/pharmacie.route.js";
import itineraireRoutes from "./routes/itineraire.route.js"
import { errorHandler } from "./middlewares/errorHandler.js";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API en ligne " });
});

app.use("/api/pharmacies", pharmacieRoutes);
app.use("/api/itineraire",itineraireRoutes)
app.use(errorHandler);
const startServer = () => {
  app.listen(4000, () => {
    console.log("server running ");
  });
};

startServer();
