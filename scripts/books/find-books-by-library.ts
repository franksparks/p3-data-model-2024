import { findBooksByLibrary } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun find-books-by-library-id.ts <library-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const books = await findBooksByLibrary(Number(identifier));
console.log("Requested books located at library with id", identifier);
if (books != null) {
  console.log("Books found: ", books.length);
  for (const { title, pages } of books) {
    console.log(`${title}, ${pages} pages long.`);
  }
}
