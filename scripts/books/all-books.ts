import { findAllBooks } from "../../src/books";

const books = await findAllBooks();
console.log("List of all books:");
for (const { title, pages, available, author, library } of books) {
  console.log(`${title} book, with ${pages} pages, located at library ${library.name}`);
  console.log(`Written by ${author.name} ${author.lastName}`);
  if (available) {
    console.log("This book is available for borrowing.");
  } else {
    console.log("This book is not available for borrowing.");
  }
}
