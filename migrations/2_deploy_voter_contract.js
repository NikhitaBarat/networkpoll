// const VoterContract = artifacts.require("VoterContract");
const IPFSFileStorage = artifacts.require("IpfsFileStorage");
// const VoterERC = artifacts.require("VoterERC");
// const VotingGovernor = artifacts.require("VotingGovernor")



module.exports = function (deployer) {
    // deployer.deploy(VoterERC);
    // deployer.deploy(VotingGovernor);
    deployer.deploy(IPFSFileStorage);
}