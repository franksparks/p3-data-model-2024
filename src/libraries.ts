import type { Prisma } from "@prisma/client";
import { db } from "./db";

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
