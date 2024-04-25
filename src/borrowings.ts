import type { Prisma } from "@prisma/client";
import { db } from "./db";
import { bookAvailability } from "./books";

export type BorrowingOutput = Prisma.BorrowingCreateInput;
export type BorrowingsOutput = Prisma.BorrowingCreateManyInput;

export const newBorrowing = async (affiliateId: number, bookId: number) => {
  const result = await db.borrowing.create({
    data: {
      affiliateId,
      bookId,
    },
  });
  return result;
};

export const newBorrowingCheckingAvailability = async (affiliateId: number, bookId: number) => {
  const available = await bookAvailability(bookId);

  if (available == false) {
    console.log("Book is not available for borrowing.");
    return 0;
  }

  const result = await db.borrowing.create({
    data: {
      affiliateId,
      bookId,
    },
    include: { book: true },
  });
  return result;
};

export const findBorrowingsByAffiliateId = async (
  affiliateId: number
): Promise<BorrowingsOutput[] | null> => {
  const result = await db.borrowing.findMany({
    where: { affiliateId },
    include: { book: true },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};

export const findActiveBorrowingsByAffiliateId = async (
  affiliateId: number
): Promise<BorrowingsOutput[] | null> => {
  const result = await db.borrowing.findMany({
    where: { affiliateId, active: true },
    include: { book: true },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};
