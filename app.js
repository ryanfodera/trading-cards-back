const express = require("express");
const app = express();
const cors = require("cors");

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/products", require("./routes/products"));

// 404 handler
app.use("*", (req, res) => {
    res.status(404).json({ success: false, error: "Resource Not Found!" });
});

module.exports = app;