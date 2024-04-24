import { findAffiliatesByLastName } from "../../src/affiliates";

if (process.argv.length < 2) {
  console.error("Usage: bun find-affiliate-by-lastname.ts <author-lastname>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findAffiliatesByLastName(identifier);
console.log(result);
