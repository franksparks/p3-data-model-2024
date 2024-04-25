import { findAffiliatesByLastName } from "../../src/affiliates";

if (process.argv.length < 2) {
  console.error("Usage: bun find-affiliate-by-lastname.ts <author-lastname>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const affiliates = await findAffiliatesByLastName(identifier);
console.log("Requested affiliates with lastname:", identifier);
if (affiliates != null) {
  for (const { name, lastName, email, city, libraryId, address } of affiliates) {
    console.log(
      `${name} ${lastName}, with email address ${email}, who lives on ${city}, is affiliated with library with id ${libraryId}`
    );
    if (address != null) {
      console.log("Address: ", address);
    }
  }
}
