import { findActiveBorrowings } from "../../src/borrowings";

const borrowings = await findActiveBorrowings();
for (const { borrowId, bookId } of borrowings) {
  console.log(`Borrow id ${borrowId}, by affiliate ${affiliateId}. Book: ${bookId}`);
}
console.log("Total active borrowings: ", borrowings.length);
