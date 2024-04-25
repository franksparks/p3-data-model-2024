import { bookAvailability } from "../../src/books";

if (process.argv.length != 3) {
  console.error("Usage: bun book-availability.ts <book-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await bookAvailability(Number(identifier));
if (result != null && result == true) {
  console.log("Book is available");
} else if (result != null && result == false) {
  console.log("Book is not available");
}
