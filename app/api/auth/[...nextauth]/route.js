import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from "@utils/database";

// boiler plate code from Nextjs docs 
// check out for more info
// https://next-auth.js.org/configuration/initialization#route-handlers-app


const handler = NextAuth({
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({ session }) {

    },
    // serverless route -> lambda function -> only spins up when called ->
    async signIn({ profile }) {
        try {
            await connectToDB();
            // check if a user already exists

            // if not, create a new user

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
});

export { handler as GET, handler as POST };