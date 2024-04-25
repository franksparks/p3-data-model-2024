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

if (result != null) {
  console.log("A new book was added:");
  console.log(
    `Book information: ${result.title}, written by ${result.author.name} ${result.author.lastName}, with ${result.pages} pages`
  );
  console.log(`Available at: ${result.library.name}, in ${result.library.city}`);
}
