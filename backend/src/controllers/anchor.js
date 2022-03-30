const {DENOMS} = require("@anchor-protocol/anchor-earn");
const crypto = require("crypto");
const axios = require("axios");

const {anchorEarn} = require("../initiate-anchor.js");
const {DepositModel} = require("../models/deposit.js");
const {rzpInstance} = require("../initiate-razorpay.js");
require("dotenv").config();

async function getBalance(req, res, next) {
    try {
        const balanceRes = await anchorEarn.balance({currencies: [DENOMS.UST]});
        res.status(200).send({ status: true, balanceRes });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e });
    }
}

async function depositUSTintoAnchor(req, res, next) {
    try {
        const {
            order_id,
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
        } = req.body;

        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);
        const shasum = crypto.createHmac("sha256", process.env.RZP_KEY_SECRET);

        shasum.update(`${order_id}|${razorpay_payment_id}`);

        const digest = shasum.digest("hex");

        // comaparing our digest with the actual signature
        if (digest !== razorpay_signature)
            return res.status(400).json({ msg: "Transaction not legit!" });

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        const priceRes = await axios.get("https://openexchangerates.org/api/latest.json?app_id=" + process.env.OPENEXCHANGERATES_API_KEY);

        const deposit = await anchorEarn.deposit({
            currency: DENOMS.UST,
            amount: req.body.amount / priceRes.data.rates.INR
        });

        await DepositModel.create({
            userIdentifier: req.body.username + req.body.password,
            depositAmount: req.body.amount,
            depositedOn: Date.now()
        });

        res.status(200).send({status: true, deposit});
    } catch (e) {
        console.log(e);
        res.status(500).send({status: false, msg: e});
    }
}

module.exports.getBalance = getBalance;
module.exports.depositUSTintoAnchor = depositUSTintoAnchor;