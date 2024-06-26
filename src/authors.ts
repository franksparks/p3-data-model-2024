import type { Prisma } from "@prisma/client";
import { db } from "./db";

export type AuthorOutput = Prisma.AuthorCreateInput;
export type AuthorsOutput = Prisma.AuthorCreateManyInput;

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

export const findAuthorById = async (authorId: number): Promise<AuthorOutput | null> => {
  const result = await db.author.findFirst({ where: { authorId } });
  return result === null ? (console.log("No author matches your criteria"), null) : result;
};

export const findAuthorsByLastName = async (lastName: string): Promise<AuthorsOutput[] | null> => {
  const result = await db.author.findMany({ where: { lastName } });
  return result === null ? (console.log("No author matches your criteria"), null) : result;
};

export const findAllAuthors = async (): Promise<AuthorOutput[]> => {
  return await db.author.findMany();
};
