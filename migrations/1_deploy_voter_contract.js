const VoterContract = artifacts.require("SimpleStorage");

module.exports = function (deployer) {
    deployer.deploy(VoterContract);
}