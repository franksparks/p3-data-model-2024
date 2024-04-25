import { newBorrowing } from "../../src/borrowings";

if (process.argv.length != 4) {
  console.error("Usage: bun new-borrowing.ts <affiliate-id> <book-id>");
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [affiliateId, bookId] = args;

const result = await newBorrowing(Number(affiliateId), Number(bookId));

console.log("Borrowing inserted:", result);
