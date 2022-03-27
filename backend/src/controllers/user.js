const {DepositModel} = require("../models/deposit.js");

async function getDepositDetails(req, res, next) {
    try {
        const response = await DepositModel.find({userIdentifier: req.body.username + req.body.password}, {_id: false, userIdentifier: false});
        res.status(200).send({ status: true, response });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e });
    }
}

module.exports.getDepositDetails = getDepositDetails;