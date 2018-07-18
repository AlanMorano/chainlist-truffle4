var StandardToken = artifacts.require("./StandardToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(StandardToken, "Standard Token", "STN", 18, 1000000000000000000000000000);
};