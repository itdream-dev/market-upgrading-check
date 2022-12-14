const upgrades  = require('@openzeppelin/truffle-upgrades');
const MetaSaltToken = artifacts.require("MetaSaltToken");
const MetaSaltMarket = artifacts.require("MetaSaltMarket");
const MetaSaltMarketV2 = artifacts.require("MetaSaltMarketV2");
const ERC721MetaSalt = artifacts.require("ERC721MetaSalt");
const ERC1155MetaSalt = artifacts.require("ERC1155MetaSalt");

module.exports = async function(deployer) {  
  // const erc20Token = await upgrades.deployProxy(MetaSaltToken, ["MetaSaltToken", "MST", 1000000000000000, "0xdc5cd25a44c36e69e9ca3896e833de1e3b9662279222692b7c97594a67dcdec5", 1000000000000000], { deployer,  initializer: 'initialize'});
  // console.log("deployed MetaSaltToken token", erc20Token.address)
  // const adminInstance = await upgrades.admin.getInstance();
  // const adminAddress = await adminInstance.getProxyAdmin(erc20Token.address);
  // console.log('getInstance adminAddress', adminAddress);
  // console.log('adminInstance address', adminInstance.address);

  // const instance = await upgrades.deployProxy(ERC721MetaSalt, ["MetaSaltERC721", "MSN", "https://", "0x1D0DaCc708Bd0F42a0f100F0F1b2D3a32A4f6aB7", 1000000000000000], { deployer,  initializer: '__ERC721MetaSalt_init'});
  // console.log("deployed ERC721MetaSalt nft", instance.address)
  // const adminInstance = await upgrades.admin.getInstance();
  // const adminAddress = await adminInstance.getProxyAdmin(instance.address);
  // console.log('getInstance adminAddress', adminAddress);
  // console.log('adminInstance address', adminInstance.address);

  // const instance = await upgrades.deployProxy(ERC1155MetaSalt, ["MetaSaltERC1155", "MSN", "https://", "0x1D0DaCc708Bd0F42a0f100F0F1b2D3a32A4f6aB7", 1000000000000000], { deployer,  initializer: '__ERC1155MetaSalt_init'});
  // console.log("deployed ERC1155MetaSalt nft", instance.address)
  // const adminInstance = await upgrades.admin.getInstance();
  // const adminAddress = await adminInstance.getProxyAdmin(instance.address);
  // console.log('getInstance adminAddress', adminAddress);
  // console.log('adminInstance address', adminInstance.address);

  // const instance = await upgrades.deployProxy(MetaSaltMarketV2, [10, "0x67e58Df9F17bdeF1245198D5565937fC42B5D217", "0x0A605283B727BC877b8d1953E34B297503C93614", "0xbCe1783109ca4B58833329Cd9a59Bb330F1B3296"], { deployer,  initializer: '__MetaSaltMarket_init'});
  // console.log("deployed MetaSaltMarketV2 market", instance.address)
  // const adminInstance = await upgrades.admin.getInstance();
  // const adminAddress = await adminInstance.getProxyAdmin(instance.address);
  // console.log('getInstance adminAddress', adminAddress);
  // console.log('adminInstance address', adminInstance.address);
};
