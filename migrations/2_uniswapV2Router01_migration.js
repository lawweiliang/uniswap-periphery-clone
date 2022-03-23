const UniswapV2Router01 = artifacts.require('UniswapV2Router01');

//Why WETH9 - Copy from the original WETH contract
const WETH = artifacts.require('WETH9');

module.exports = async (deployer, network) => {
  const factoryAddress = '0x66ED0f42A5A1176f3325Ef287b749aEd7eBCd345';

  if (network == 'mainnet') {
    wethInstance = WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
    await deployer.deploy(WETH);
    wethInstance = await WETH.deployed();
  }

  await deployer.deploy(UniswapV2Router01, factoryAddress, wethInstance.address);
};
