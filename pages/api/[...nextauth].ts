import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "next-auth/prisma-adapter";

export const authOtions: AuthOptions = {
  adapter: PrismaAdapter(),
};
