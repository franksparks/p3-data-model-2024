import { findBookById } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun find-books-by-book-id.ts <book-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findBookById(Number(identifier));
console.log("Requested book with id:", identifier);
if (result != null) {
  console.log(
    `Book information: ${result.title}, written by ${result.author.name} ${result.author.lastName}, with ${result.pages} pages`
  );
  console.log(`Located to: ${result.library.name}, in ${result.library.city}`);
}
