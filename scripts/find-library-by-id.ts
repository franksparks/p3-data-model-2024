import { findLibraryById } from "../src/libraries";

if (process.argv.length < 2) {
  console.error("Usage: bun find-library-by-id.ts <library-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findLibraryById(Number(identifier));
console.log(result);
