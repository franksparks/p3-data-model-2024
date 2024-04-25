import { findAllAuthors } from "../../src/authors";

const authors = await findAllAuthors();
console.log("List of all authors:");
for (const { name, lastName, birthPlace } of authors) {
  console.log(`${name} ${lastName}, who was born in ${birthPlace}`);
}
