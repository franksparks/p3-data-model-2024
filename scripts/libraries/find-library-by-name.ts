import { findLibraryByName } from "../../src/libraries";

if (process.argv.length != 3) {
  console.error("Usage: bun find-library-by-name.ts <library-name>");
  process.exit(1);
}

const [_bun, _script, libraryName] = process.argv;

const result = await findLibraryByName(libraryName);
console.log("Requested library with name:", libraryName);
if (result != null) {
  console.log(
    `Data: Library information: ${result.name} Library, located in ${result.city}, with adress ${result.address}`
  );
}
