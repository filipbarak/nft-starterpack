# A Simple NFT Starterpack

In this repo you will find everything you need to deploy an very basic NFT contract on the **Ropsten Testnet**. It includes a script for deploying (`scripts/deploy.js`) and a script for minting (`scripts/mint-nft.js`)

The contract itself is located into `contracts/TestNFT.sol`, while the abi & bytecode you will
find in `artifacts/contracts/TestNFT.sol/TestNFT.json`

## Setup

Run `npm install` to install all required dependencies.

Create a `.env` file in the root of your the project and add the properties found in `.env.example`
with their respective values.
To get an API key, one of the options is `https://www.alchemy.com/`. 
Create an app under the **Ropsten Testnet**, and grab the API url.

I will assume you know how to get your private and public key from your wallet on Ropsten and drip Ethereum from their faucet.

### Compiling
Run `npx hardhat compile` to compile the contract.

### Deploying
Run `npx hardhat run scripts/deploy.js --network ropsten` to deploy the contract
on the **Ropsten Testnet.**

### Minting
 You will need the NFT metadata to mint an NFT. An NFT metadata is a standard that describes the different properties the minted NFT will have. You can read more about the standard, and how it should look like here: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md.

Once you have your metadata, replace the `nftMetadataHash` variable in `scripts/mint-nft.js`.

To mint, run `node scripts/mint-nft.js`.