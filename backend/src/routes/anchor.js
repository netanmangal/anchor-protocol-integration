const express = require("express");
const app = express();

const anchorController = require("../controllers/anchor.js");

app.get("/getBalance", async (req, res, next) => {
    anchorController.getBalance(req, res, next);
});

app.post("/depositUSTintoAnchor", async (req, res, next) => {
    anchorController.depositUSTintoAnchor(req, res, next);
});

module.exports.anchorRoutes = app;