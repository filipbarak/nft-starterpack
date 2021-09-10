async function main() {
    const TestNFT = await ethers.getContractFactory("TestNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const testNFT = await TestNFT.deploy()
    console.log("Contract deployed to address:", testNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  
    // deployed to: 0x93003B69e027e19e4a25634bf02AeDada48935d2