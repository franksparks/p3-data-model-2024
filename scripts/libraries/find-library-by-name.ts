import { findLibraryByName } from "../../src/libraries";

if (process.argv.length < 2) {
  console.error("Usage: bun find-library-by-name.ts <library-name>");
  process.exit(1);
}

const [_bun, _script, libraryName] = process.argv;

const result = await findLibraryByName(libraryName);
console.log(result);
