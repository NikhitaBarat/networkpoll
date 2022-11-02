const VoterContract = artifacts.require("VoterContract");
const IPFSFileStorage = artifacts.require("IpfsFileStorage");

module.exports = function (deployer) {
    deployer.deploy(VoterContract);
    deployer.deploy(IPFSFileStorage);
}