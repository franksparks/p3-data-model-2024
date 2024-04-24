import { findAuthorsByLastName } from "../../src/authors";

if (process.argv.length < 2) {
  console.error("Usage: bun find-author-by-lastname.ts <author-lastname>");
  process.exit(1);
}

const [_bun, _script, lastName] = process.argv;

const result = await findAuthorsByLastName(lastName);
console.log(result);
