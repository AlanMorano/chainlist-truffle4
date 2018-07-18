var StandardToken = artifacts.require("./StandardToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(StandardToken, "ABM Test Token", "ABm", 18, 1000000000000000000000000000);
};