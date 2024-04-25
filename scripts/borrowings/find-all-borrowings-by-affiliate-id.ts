import { findBorrowingsByAffiliateId } from "../../src/borrowings";

if (process.argv.length != 3) {
  console.error("Usage: bun find-borrowings-by-affiliate-id.ts <affiliate-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const borrowings = await findBorrowingsByAffiliateId(Number(identifier));

console.log("Requested active borrowings of affiliate with id:", identifier);
if (borrowings != null) {
  console.log("Borrowings found: ", borrowings.length);

  for (const { bookId, active } of borrowings) {
    console.log(`book with id: ${bookId} was borrowed by affiliate with id: ${identifier}. `);
    if (active) {
      console.log(`This borrowing is still active.`);
    } else {
      console.log(`This borrowing is not active.`);
    }
  }
}
