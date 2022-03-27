const mongoose = require("mongoose");

const DepositSchema = new mongoose.Schema({
    "userIdentifier": {
        type: String,
        required: true
    },
    "depositAmount": {
        type: Number,
        required: true
    },
    "depositedOn": {
        type: Date,
        required: true
    }
}, {timestamps: true});

const DepositModel = mongoose.model("deposit", DepositSchema, "deposit");

module.exports.DepositModel = DepositModel;