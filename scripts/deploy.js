const hre = require("hardhat");

async function main() {
  const uniswapRouterContract = await hre.ethers.getContractFactory(
    "UniswapV2Router02"
  );

  const deployedUniswapRouterContract = await uniswapRouterContract.deploy(10);

  await deployedUniswapRouterContract.deployed();

  console.log(
    "Whitelist Contract Address:",
    deployedUniswapRouterContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
