import type { Prisma } from "@prisma/client";
import { db } from "./db";

export type AffiliateOutput = Prisma.AffiliateCreateWithoutLibraryInput;

export const newAffiliate = async (
  name: string,
  lastName: string,
  email: string,
  city: string,
  libraryId: number
) => {
  const result = await db.affiliate.create({
    data: {
      name,
      lastName,
      email,
      city,
      libraryId,
    },
  });
  return result;
};

export const findAffiliateById = async (affiliateId: number): Promise<AffiliateOutput | null> => {
  const result = await db.affiliate.findFirst({
    where: { affiliateId },
    include: { library: true },
  });
  return result === null ? (console.log("No library matches your criteria"), null) : result;
};

export const findAffiliateByLastName = async (
  lastName: string
): Promise<AffiliateOutput | null> => {
  const result = await db.affiliate.findFirst({
    where: { lastName },
    include: { library: true },
  });
  return result === null ? (console.log("No library matches your criteria"), null) : result;
};
