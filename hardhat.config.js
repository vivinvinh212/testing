/** @type import('hardhat/config').HardhatUserConfig */
const { ethers } = require("hardhat");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  paths: {
    // Specify the path to your contracts directory
    sources: "./src/contracts",
  },
  networks: {
    OPSep: {
      url: "https://opt-sepolia.g.alchemy.com/v2/UhhPVhg21DvE7pOKB9afTpvy5cVQKS90", // Replace with your Infura project ID or other RPC URL
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
