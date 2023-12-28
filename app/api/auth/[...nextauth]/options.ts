import GoogleProvider from "next-auth/providers/google";
import { AuthOptions, ISODateString, Session, User as SessionUser} from "next-auth";
import { User } from "@/models/user";
import { connect } from "@/utils/database";


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
  callbacks:{
    async session({
      session,
    }){
      // console.log('hello hello',session,user);
      const findUser=await User.findOne({email:session.user.email});
      console.log(findUser);
      if(findUser){
        session.contains_full_details=findUser?.contains_full_details||false;
      }
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
     connect()
      try {
        console.log("hello bhai ",user.email);
      const findUser=await User.findOne({email:user.email});
      console.log("jello")
     if(!findUser){
      console.log(user.name,user.email);
      const newUser = await User.create({
        name: user.name,
        email: user.email,
        contains_full_details:false
      });
      console.log('response',newUser);
      return true;
     }
        return true;
      } catch (error) {
        
        return false;
      }
    },
    

      
  } 
};
