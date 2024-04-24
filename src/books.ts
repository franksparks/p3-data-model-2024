import type { Prisma } from "@prisma/client";
import { db } from "./db";

export type BookOutput = Prisma.BookCreateInput;

export const newBook = async (
  title: string,
  pages: number,
  available: boolean,
  libraryId: number,
  authorId: number
) => {
  const result = await db.book.create({
    data: {
      title,
      pages,
      available,
      libraryId,
      authorId,
    },
  });
  return result;
};
