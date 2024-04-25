import { findAuthorsByLastName } from "../../src/authors";

if (process.argv.length < 2) {
  console.error("Usage: bun find-author-by-lastname.ts <author-lastname>");
  process.exit(1);
}

const [_bun, _script, lastName] = process.argv;

const authors = await findAuthorsByLastName(lastName);
console.log("Requested authors with lastname:", lastName);
if (authors != null) {
  console.log("Authors found: ", authors.length);
  for (const { name, lastName, birthPlace } of authors) {
    console.log(`${name} ${lastName}, who was born in ${birthPlace}`);
  }
}
