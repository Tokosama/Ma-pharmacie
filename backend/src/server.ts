import express from "express";
import pharmacieRoutes from "./routes/pharmacie.route.js";
import itineraireRoutes from "./routes/itineraire.route.js";
import gardeRoutes from "./routes/garde.route.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { limiter } from "./middlewares/rateLimiter.js";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API en ligne " });
});
app.use(express.json());
app.use(limiter);
app.use("/api/pharmacies", pharmacieRoutes);
app.use("/api/itineraire", itineraireRoutes);
app.use("/api/gardes", gardeRoutes);
app.use(errorHandler);
const startServer = () => {
  app.listen(4000, () => {
    console.log("server running ");
  });
};

startServer();
