import { findAllLibraries } from "../src/libraries";

const libraries = await findAllLibraries();
for (const { name, city, address } of libraries) {
  console.log(`${name} library, located in ${city}. Address: ${address}`);
}
