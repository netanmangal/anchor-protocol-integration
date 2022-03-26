const {DENOMS} = require("@anchor-protocol/anchor-earn");

const {anchorEarn} = require("../initiate-anchor.js");

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
        const deposit = await anchorEarn.deposit({
            currency: DENOMS.UST,
            amount: req.body.amount
        });
        res.status(200).send({status: true, deposit});
    } catch (e) {
        console.log(e);
        res.status(500).send({status: false, msg: e});
    }
}

module.exports.getBalance = getBalance;
module.exports.depositUSTintoAnchor = depositUSTintoAnchor;