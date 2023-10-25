import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import mongodbClientPromise from "@/db/mongodb";

export const nextAuthOptions: AuthOptions = {
  adapter: MongoDBAdapter(mongodbClientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "database" },
  callbacks: {
    session: async ({ session, user }) => {
      return { ...session, id: user.id };
    },
  },
};
