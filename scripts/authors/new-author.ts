import { newAuthor } from "../../src/authors";

if (process.argv.length != 5) {
  console.error("Usage: bun new-author.ts <name> <lastName> <birthPlace>");
  process.exit(1);
}

const [_bun, _script, ...args] = process.argv;
const [name, lastName, birthPlace] = args;

const result = await newAuthor(name, lastName, birthPlace);
console.log("Library inserted:", result);
