import { findAuthorById } from "../../src/authors";

if (process.argv.length < 2) {
  console.error("Usage: bun find-author-by-id.ts <author-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findAuthorById(Number(identifier));
console.log(result);