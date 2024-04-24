import type { Prisma } from "@prisma/client";
import { db } from "./db";

export type AffiliateOutput = Prisma.AffiliateCreateInput;

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
