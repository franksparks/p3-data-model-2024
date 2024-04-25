import { findActiveBorrowingByBookId } from "../../src/borrowings";

if (process.argv.length != 3) {
  console.error("Usage: bun find-borrowings-by-book-id.ts <book-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findActiveBorrowingByBookId(Number(identifier));
console.log(result);
