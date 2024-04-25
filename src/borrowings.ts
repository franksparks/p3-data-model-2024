import type { Prisma } from "@prisma/client";
import { db } from "./db";
import { bookAvailability } from "./books";

export type BorrowingOutput = Prisma.BorrowingCreateInput;
export type BorrowingsOutput = Prisma.BorrowingCreateManyInput;

export const newBorrowingCheckingAvailability = async (affiliateId: number, bookId: number) => {
  const available = await bookAvailability(bookId);
  const activeBorrowings = await findActiveBorrowingsByAffiliateId(affiliateId);

  if (activeBorrowings?.length == 3) {
    console.log("Affiliates cannot borrow more than 3 books.");
    return 0;
  }
  if (available == false) {
    console.log("Book is not available for borrowing.");
    return 0;
  }

  const result = await db.borrowing.create({
    data: {
      affiliateId,
      bookId,
    },
    include: { affiliate: true },
  });
  // Actualizamos el estado del libro, ya no estará diposnible
  const updateBook = await db.book.update({
    where: { bookId: bookId },
    data: { available: false },
  });
  return result;
};

export const returnBook = async (bookId: number) => {
  const available = await bookAvailability(bookId);
  const borrow = await findActiveBorrowingByBookId(bookId);

  if (available == true) {
    console.log("Book is already available.");
    return 0;
  }

  const updateBorrowing = await db.borrowing.update({
    where: { borrowId: borrow?.borrowId, active: true },
    data: { active: false },
  });

  // Actualizamos el estado del libro, ya no estará diposnible
  const updateBook = await db.book.update({
    where: { bookId: bookId },
    data: { available: true },
  });
  return { updateBorrowing, updateBook };
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

export const findActiveBorrowings = async (): Promise<BorrowingsOutput[]> => {
  return await db.borrowing.findMany({
    where: {
      active: true,
    },
    include: { affiliate: true },
  });
};

export const findActiveBorrowingByBookId = async (
  bookId: number
): Promise<BorrowingsOutput | null> => {
  const result = await db.borrowing.findFirst({
    where: { bookId, active: true },
  });
  return result === null ? (console.log("No borrowing matches your criteria"), null) : result;
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
