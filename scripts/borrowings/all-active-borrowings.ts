import { findActiveBorrowings } from "../../src/borrowings";

const borrowings = await findActiveBorrowings();
for (const { borrowId, bookId, affiliateId } of borrowings) {
  console.log(`Borrowing id ${borrowId}, by affiliate ${affiliateId}. Book id: ${bookId}`);
}
console.log("Total active borrowings: ", borrowings.length);
