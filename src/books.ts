import type { Prisma } from "@prisma/client";
import { db } from "./db";

export type BookOutput = Prisma.BookCreateInput;
export type BooksOutput = Prisma.BookCreateManyInput;
export type BookByIdOutput = Prisma.BookAvgAggregateOutputType;

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

export const findBooksByAuthor = async (authorId: number): Promise<BooksOutput[] | null> => {
  const result = await db.book.findMany({
    where: { authorId },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};

export const findBooksByLibrary = async (libraryId: number): Promise<BooksOutput[] | null> => {
  const result = await db.book.findMany({
    where: { libraryId },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};

export const findBooksByTitle = async (title: string): Promise<BooksOutput[] | null> => {
  const result = await db.book.findMany({
    where: { title },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};

export const findBookById = async (bookId: number): Promise<BookByIdOutput | null> => {
  const result = await db.book.findFirst({ where: { bookId } });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};
