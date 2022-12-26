const express = require('express');
const ContractRouter = express.Router();
const ContractABI = require('../../build/contracts/VoterContract.json')

ContractRouter.get('/abi', (req, res) => {
    res.status(200).send(ContractABI)
})

module.exports = ContractRouter;