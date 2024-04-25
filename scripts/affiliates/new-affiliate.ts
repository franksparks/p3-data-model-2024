import { newAffiliate } from "../../src/affiliates";

if (process.argv.length < 7 || process.argv.length > 8) {
  console.error("Usage 1: bun new-affiliate.ts <name> <lastName> <email> <city> <libraryId>");
  console.error(
    "Usage 2: bun new-affiliate.ts <name> <lastName> <email> <city> <libraryId> <address>"
  );
  process.exit(1);
} else {
  const [_bun, _script, ...args] = process.argv;
  const [name, lastName, email, city, libraryId, address] = args;

  const result = await newAffiliate(name, lastName, email, city, Number(libraryId), address);
  console.log("New affiliate inserted:", result);
}
