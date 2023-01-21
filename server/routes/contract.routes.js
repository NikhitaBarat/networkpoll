const express = require('express');
const ContractRouter = express.Router();
const ContractABI = require('../../build/contracts/VoterContract.json')
const { PrivateKey, PublicKey } = require('../src/keyexchange');

ContractRouter.get('/abi', (req, res) => {
    res.status(200).send(ContractABI)
})

ContractRouter.get('/keys', (req, res) => {
    res.status(200).send({
        public_key: PublicKey,
        private_key: PrivateKey,
    })
})

module.exports = ContractRouter;