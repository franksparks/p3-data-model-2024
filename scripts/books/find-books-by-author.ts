import { findBooksByAuthor } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun find-books-by-author-id.ts <author-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const books = await findBooksByAuthor(Number(identifier));

console.log("Requested books written by author with id", identifier);
if (books != null) {
  for (const { title, pages } of books) {
    console.log(`${title}, ${pages} pages long.`);
  }
}
