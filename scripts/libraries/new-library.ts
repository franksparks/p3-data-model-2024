import { newLibrary } from "../../src/libraries";

if (process.argv.length != 5) {
  console.error("Usage: bun new-library.ts <name> <city> <address>");
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [name, city, address] = args;

const result = await newLibrary(name, city, address);
if (result != null) {
  console.log("A new library was added:");
  console.log(
    `Library information: ${result.name} Library, located in ${result.city}, with adress ${result.address}`
  );
}
