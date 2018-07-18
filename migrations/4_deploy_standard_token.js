var StandardToken = artifacts.require("./StandardToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(StandardToken, "ABM Test Token", "ABM", 18, 100000000000000000000000000);
};