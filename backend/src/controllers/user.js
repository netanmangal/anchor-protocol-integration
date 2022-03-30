const {DepositModel} = require("../models/deposit.js");
const {rzpInstance} = require("../initiate-razorpay.js");

async function getDepositDetails(req, res, next) {
    try {
        const response = await DepositModel.find({userIdentifier: req.body.username + req.body.password}, {_id: false, userIdentifier: false});
        res.status(200).send({ status: true, response });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e });
    }
}

async function createOrderID(req, res, next) {
    try {
        const response = await rzpInstance.orders.create({
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: (new Date() % 923847) + req.body.amount + (new Date() % 3002347),
            notes: {
                username: req.body.username
            }
        });
        res.status(200).send({ status: true, msg: response });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e });
    }
}

module.exports.getDepositDetails = getDepositDetails;
module.exports.createOrderID = createOrderID;