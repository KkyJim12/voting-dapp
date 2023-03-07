const hre = require("hardhat");
require("dotenv").config();

const { GOERLI_PUBLIC_KEY } = process.env;

async function main() {
  const Vote = await hre.ethers.getContractFactory("Vote");
  const vote = await Vote.deploy(GOERLI_PUBLIC_KEY);

  await vote.deployed();

  console.log("Vote contract is deployed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
