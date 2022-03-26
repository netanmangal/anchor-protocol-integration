const { AnchorEarn, CHAINS, NETWORKS } = require("@anchor-protocol/anchor-earn");
require("dotenv").config();

const anchorEarn = new AnchorEarn({
    chain: CHAINS.TERRA,
    network: NETWORKS.BOMBAY_12,
    mnemonic: process.env.MNEMONIC,
    address: 'terra18a6dxe0xqqhc2rr8ngadkyyxgx9gzg99yd0za5'
});

module.exports.anchorEarn = anchorEarn;