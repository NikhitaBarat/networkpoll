const express = require('express');
const ContractRouter = express.Router();
const { PrivateKey, PublicKey } = require('../src/keyexchange');

ContractRouter.get('/v1/abi', async (req, res) => {
    let ContractABI = await require('../../build/contracts/VoterContract.json')
    res.status(200).send(ContractABI)
})

ContractRouter.get('/keys', (req, res) => {
    res.status(200).send({
        public_key: PublicKey,
        private_key: PrivateKey,
    })
})

module.exports = ContractRouter;