import type { Prisma } from "@prisma/client";
import { db } from "./db";

export const newAuthor = async (name: string, lastName: string, birthPlace: string) => {
  const result = await db.author.create({
    data: {
      name,
      lastName,
      birthPlace,
    },
  });
  return result;
};
