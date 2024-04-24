import { newBook } from "../../src/books";

if (process.argv.length != 7) {
  console.error("Usage: bun new-book.ts <title> <pages> <available> <libraryId> <authorId>");
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [title, pages, available, libraryId, authorId] = args;

const result = await newBook(
  title,
  Number(pages),
  Boolean(available),
  Number(libraryId),
  Number(authorId)
);

console.log("Book inserted:", result);
