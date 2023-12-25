import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";


console.log('client id',process.env.GOOGLE_CLIENT_ID);
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
};
