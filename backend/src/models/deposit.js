const mongoose = require("mongoose");

const DepositSchema = new mongoose.Schema({
    "userIdentifier": {
        type: String,
        required: true
    },
    "depositAmount": {
        type: mongoose.Types.Decimal128,
        required: true
    },
    "depositedOn": {
        type: Date,
        required: true
    }
}, {timestamps: true});

const DepositModel = mongoose.model("deposit", DepositSchema, "deposit");

module.exports.DepositModel = DepositModel;