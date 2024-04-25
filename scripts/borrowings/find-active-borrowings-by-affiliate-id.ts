import { findActiveBorrowingsByAffiliateId } from "../../src/borrowings";

if (process.argv.length < 2) {
  console.error("Usage: bun find-affiliate-by-library-id.ts <affiliate-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findActiveBorrowingsByAffiliateId(Number(identifier));
console.log(result);
