
const hre = require("hardhat");


// async function main(){
  
//   const Voting=await ethers.getContractFactory("Voting");

//   const Voting_=await  Voting.deploy(["Mark","Mike","Henry","Rock",90]);
//   // console.log("Contract address:",Voting_.address);

// }

async function main() {
  const voting = await hre.ethers.deployContract("Voting",[["Mark","Mike","Henry","Rock"],90]); // Deploy the contract


  console.log("Deployed contract address:", await voting.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
