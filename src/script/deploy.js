// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  // Deploying Token
  const token = await ethers.getContractFactory("Token");
  const Token = await token.deploy(/* constructor arguments, if any */);
  await Token.deployed();
  console.log("Token deployed to:", Token.address);

  // Deploying Presale
  const presale = await ethers.getContractFactory("Presale");
  const Presale = await presale.deploy(/* constructor arguments, if any */);
  await Presale.deployed();
  console.log("Presale deployed to:", Presale.address);

//   const mint = await 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
