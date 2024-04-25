import { findAffiliateById } from "../../src/affiliates";

if (process.argv.length < 2) {
  console.error("Usage: bun find-affiliate-by-id.ts <affiliate-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findAffiliateById(Number(identifier));
console.log("Requested affiliate with id:", identifier);
if (result != null) {
  console.log(
    `Data: ${result.name} ${result.lastName}, with email address ${result.email}, who lives on ${result.city}`
  );
  console.log(`Affiliated to: ${result.library.name}, in ${result.library.city}`);
  if (result.address != null) {
    console.log("Affiliate address: ", result.address);
  }
}
