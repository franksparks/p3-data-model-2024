import { findBookById } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun find-books-by-book-id.ts <book-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findBookById(Number(identifier));
console.log(result);
