import { findBooksByLibrary } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun find-books-by-library-id.ts <library-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findBooksByLibrary(Number(identifier));
console.log(result);
