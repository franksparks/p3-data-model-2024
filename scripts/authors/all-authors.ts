import { findAllAuthors } from "../../src/authors";

const authors = await findAllAuthors();
for (const { name, lastName, birthPlace } of authors) {
  console.log(`${name} ${lastName}, who was born in ${birthPlace}`);
}
