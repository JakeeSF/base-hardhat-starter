async function main() {
  const HelloBase = await ethers.getContractFactory("HelloBase");
  const contract = await HelloBase.deploy();
  await contract.deployed();

  console.log("HelloBase deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
