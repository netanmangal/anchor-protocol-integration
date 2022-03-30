const express = require("express");
const app = express();

const userController = require("../controllers/user.js");

app.post("/getDepositDetails", async (req, res, next) => {
    userController.getDepositDetails(req, res, next);
});

app.post("/createOrderId", async (req, res, next) => {
    userController.createOrderID(req, res, next);
});

module.exports.userRoutes = app;