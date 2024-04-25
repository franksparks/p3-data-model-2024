import { returnBook } from "../../src/borrowings";

if (process.argv.length != 3) {
  console.error("Usage: bun return-book.ts <book-id>");
  process.exit(1);
}

const [_bun, _script, bookId] = process.argv;

const result = await returnBook(Number(bookId));

console.log("Book returned, borrowing removed:", result);
