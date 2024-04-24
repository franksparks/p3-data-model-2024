import { findBooksByAuthor } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun find-books-by-author-id.ts <author-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findBooksByAuthor(Number(identifier));
console.log(result);
