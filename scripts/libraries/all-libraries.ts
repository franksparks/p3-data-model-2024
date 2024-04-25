import { findAllLibraries } from "../../src/libraries";

const libraries = await findAllLibraries();
console.log("List of all libraries:");
for (const { name, city, address } of libraries) {
  console.log(`${name} library, located in ${city}. Address: ${address}`);
}
