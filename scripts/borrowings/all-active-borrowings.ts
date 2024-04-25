import { findActiveBorrowings } from "../../src/borrowings";

const borrowings = await findActiveBorrowings();
for (const { borrowId, affiliateId, bookId } of borrowings) {
  console.log(`${borrowId} borrowing, by affiliate ${affiliateId}. Book: ${bookId}`);
}
console.log("Total active borrowings: ", borrowings.length);
