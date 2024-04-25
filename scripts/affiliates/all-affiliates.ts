import { findAllAffiliates } from "../../src/affiliates";

const affiliates = await findAllAffiliates();
console.log("List of all affiliates:");
for (const { name, lastName, email, city, libraryId, address } of affiliates) {
  console.log(
    `${name} ${lastName}, with email address ${email}, who lives on ${city}, is affiliated with library with id ${libraryId}`
  );
  if (address != null) {
    console.log("Address: ", address);
  }
}
