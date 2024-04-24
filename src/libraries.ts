import type { Prisma } from "@prisma/client";
import { db } from "./db";

export type LibraryOutput = Prisma.LibraryCreateInput;

export const newLibrary = async (name: string, city: string, address: string) => {
  const result = await db.library.create({
    data: {
      name,
      city,
      address,
    },
  });
  return result;
};

export const findLibraryById = async (libraryId: number): Promise<LibraryOutput | null> => {
  const result = await db.library.findFirst({ where: { libraryId } });
  return result === null ? (console.log("No library matches your criteria"), null) : result;
};

export const findLibraryByName = async (name: string): Promise<LibraryOutput | null> => {
  const result = await db.library.findFirst({ where: { name } });
  return result === null ? (console.log("No library matches your criteria"), null) : result;
};

export const findAllLibraries = async (): Promise<LibraryOutput[]> => {
  return await db.library.findMany();
};
