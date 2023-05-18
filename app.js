const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Trading Cards!");
});

app.get("*", (req, res) => {
    res.status(404).json({error: "Not Found"});
});

module.exports = app;