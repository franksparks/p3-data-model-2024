import { findAuthorsByLastName } from "../../src/authors";

if (process.argv.length < 2) {
  console.error("Usage: bun find-author-by-lastname.ts <author-lastname>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findAuthorsByLastName(identifier);
console.log(result);
