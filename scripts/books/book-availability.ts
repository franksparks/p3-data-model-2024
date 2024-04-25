import { bookAvailability } from "../../src/books";

if (process.argv.length < 2) {
  console.error("Usage: bun book-availability.ts <book-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await bookAvailability(Number(identifier));
console.log(result);
