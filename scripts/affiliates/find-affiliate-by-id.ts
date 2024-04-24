import { findAffiliateById } from "../../src/affiliates";

if (process.argv.length < 2) {
  console.error("Usage: bun find-affiliate-by-id.ts <affiliate-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findAffiliateById(Number(identifier));
console.log(result);
