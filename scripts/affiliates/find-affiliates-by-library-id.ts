import { findAffiliatesByLibraryId } from "../../src/affiliates";

if (process.argv.length < 2) {
  console.error("Usage: bun find-affiliate-by-library-id.ts <library-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const affiliates = await findAffiliatesByLibraryId(Number(identifier));

console.log("Requested affiliates of library with id:", identifier);
if (affiliates != null) {
  console.log("Affiliates found: ", affiliates.length);

  for (const { name, lastName, email, city, library, address } of affiliates) {
    console.log(
      `${name} ${lastName}, with email address ${email}, who lives on ${city}, is affiliated with library ${library.name}`
    );

    if (address != null) {
      console.log("Address: ", address);
    }
  }
}
