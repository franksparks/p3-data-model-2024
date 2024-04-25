import { findBooksByTitle } from "../../src/books";

if (process.argv.length != 3) {
  console.error("Usage: bun find-books-by-title.ts <title>");
  process.exit(1);
}

const [_bun, _script, title] = process.argv;

const books = await findBooksByTitle(title);
console.log("Requested books with title such as:", title);
if (books != null) {
  console.log("Books found: ", books.length);
  for (const { title, pages } of books) {
    console.log(`${title}, ${pages} pages long.`);
  }
}
