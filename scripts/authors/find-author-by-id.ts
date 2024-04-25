import { findAuthorById } from "../../src/authors";

if (process.argv.length != 3) {
  console.error("Usage: bun find-author-by-id.ts <author-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findAuthorById(Number(identifier));

console.log("Requested author with id:", identifier);
if (result != null) {
  console.log(`Data: ${result.name} ${result.lastName}, born in ${result.birthPlace} `);
}
