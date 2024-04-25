import type { Prisma } from "@prisma/client";
import { db } from "./db";

export type AffiliateOutput = Prisma.AffiliateCreateWithoutLibraryInput;
export type AffiliatesOutput = Prisma.AffiliateCreateManyInput;

export const newAffiliate = async (
  name: string,
  lastName: string,
  email: string,
  city: string,
  libraryId: number,
  address?: string
) => {
  const result = await db.affiliate.create({
    data: {
      name,
      lastName,
      email,
      city,
      libraryId,
      address,
    },
    include: { library: true },
  });
  return result;
};

export const findAffiliateById = async (affiliateId: number): Promise<AffiliateOutput | null> => {
  const result = await db.affiliate.findFirst({
    where: { affiliateId },
    include: { library: true },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};

export const findAffiliatesByLastName = async (
  lastName: string
): Promise<AffiliatesOutput[] | null> => {
  const result = await db.affiliate.findMany({
    where: { lastName },
    include: { library: true },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};

// Devolvemos los afiliados a una biblioteca concreta
export const findAffiliatesByLibraryId = async (
  libraryId: number
): Promise<AffiliatesOutput[] | null> => {
  const result = await db.affiliate.findMany({
    where: { libraryId },
    include: { library: true },
  });
  return result === null ? (console.log("No affiliate matches your criteria"), null) : result;
};

export const findAllAffiliates = async (): Promise<AffiliatesOutput[]> => {
  return await db.affiliate.findMany();
};
