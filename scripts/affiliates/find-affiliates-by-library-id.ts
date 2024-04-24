import { findAffiliatesByLibraryId } from "../../src/affiliates";

if (process.argv.length < 2) {
  console.error("Usage: bun find-affiliate-by-library-id.ts <library-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findAffiliatesByLibraryId(Number(identifier));
console.log(result);
