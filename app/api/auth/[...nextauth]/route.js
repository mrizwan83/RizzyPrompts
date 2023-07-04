import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

// boiler plate code from Nextjs docs 
// check out for more info
// https://next-auth.js.org/configuration/initialization#route-handlers-app

const handler = NextAuth({
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: '',
            clientSecret: ''
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
});

export { handler as GET, handler as POST };