import NextAuth, { type NextAuthOptions } from "next-auth";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import GoogleProvider from "next-auth/providers/google"


export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      clientSecret: process.env.GOOGLE_SECRET_KEY
    })
  ]
};

export default NextAuth(authOptions);
