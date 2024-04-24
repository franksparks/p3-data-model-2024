import { newAffiliate } from "../../src/affiliates";

if (process.argv.length != 7) {
  console.error("Usage: bun new-affiliate.ts <name> <lastName> <email> <city> <libraryId>");
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [name, lastName, email, city, libraryId] = args;

const result = await newAffiliate(name, lastName, email, city, Number(libraryId));
console.log("New affiliate inserted:", result);
