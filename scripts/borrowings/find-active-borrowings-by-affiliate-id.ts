import { findActiveBorrowingsByAffiliateId } from "../../src/borrowings";

if (process.argv.length != 3) {
  console.error("Usage: bun find-active-borrowings-by-affiliate-id.ts <affiliate-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findActiveBorrowingsByAffiliateId(Number(identifier));
console.log(result);
console.log("Total active borrowings: ", result?.length);
