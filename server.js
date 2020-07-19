const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API Running..."));

app.get("/api", (req, res) => res.send("API2 Running..."));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
