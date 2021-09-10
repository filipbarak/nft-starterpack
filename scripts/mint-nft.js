require("dotenv").config()
const contract = require("../artifacts/contracts/TestNFT.sol/TestNFT.json");
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)
