import { findBooksByTitle } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun find-books-by-title.ts <lastname>");
  process.exit(1);
}

const [_bun, _script, title] = process.argv;

const result = await findBooksByTitle(title);
console.log(result);
