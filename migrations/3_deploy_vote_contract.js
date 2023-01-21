const EVotingVR2 = artifacts.require('EVotingVR2');
module.exports = function (deployer) {
    for(let i = 0; i < 10; i++){
        deployer.deploy(EVotingVR2);
    }
}
