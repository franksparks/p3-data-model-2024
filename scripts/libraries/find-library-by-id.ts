import { findLibraryById } from "../../src/libraries";

if (process.argv.length != 3) {
  console.error("Usage: bun find-library-by-id.ts <library-id>");
  process.exit(1);
}

const [_bun, _script, identifier] = process.argv;

const result = await findLibraryById(Number(identifier));
console.log("Requested library with id:", identifier);
if (result != null) {
  console.log(
    `Data: Library information: ${result.name} Library, located in ${result.city}, with adress ${result.address}`
  );
}
