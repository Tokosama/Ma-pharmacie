import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API en ligne " });
});

const startServer = () => {
  app.listen(4000, () => {
    console.log("server running ");
  });
};

startServer();
