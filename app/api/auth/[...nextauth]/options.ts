import GoogleProvider from "next-auth/providers/google";
import {
  AuthOptions,
  ISODateString,
  Session,
  User as SessionUser,
} from "next-auth";
import { Users } from "@/models/users";
import { connect } from "@/utils/database";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // ...add more providers here if needed
  ],
  callbacks: {
    async session({ session }) {
      const findUser = await Users.findOne({ email: session.user.email });

      if (findUser) {
        session.contains_full_details =
          findUser?.contains_full_details || false;
      }
      return session;
    },
    async signIn({ user }) {
      connect();
      try {
        const findUser = await Users.findOne({ email: user.email });

        if (!findUser) {
          const newUser = await Users.create({
            name: user.name,
            email: user.email,
            contains_full_details: false,
          });
          console.log(newUser);

          return true;
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
