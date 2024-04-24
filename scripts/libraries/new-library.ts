import { newLibrary } from "../../src/libraries";

if (process.argv.length != 5) {
  console.error("Usage: bun new-library.ts <name> <city> <address>");
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [name, city, address] = args;

const result = await newLibrary(name, city, address);
console.log("Library inserted:", result);
