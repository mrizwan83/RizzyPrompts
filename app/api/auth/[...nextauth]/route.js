import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from "next-auth/providers/github";
import User from "@models/user";
import { connectToDB } from "@utils/database";

// boiler plate code from Nextjs docs 
// check out for more info
// https://next-auth.js.org/configuration/initialization#route-handlers-app


const handler = NextAuth({
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // name: "or Sign up with Google"
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            // name: "or Sign up with Github"
        }),
    ],
    callbacks: {
        // allows us to know which users are currently logged in
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            });

            session.user.id = sessionUser._id.toString();

            return session;
        },
        // serverless route -> lambda function -> only spins up when called ->
        async signIn({ profile }) {
            try {
                await connectToDB();

                // check if a user already exists
                const userExists = await User.findOne({
                    email: profile.email
                });
                // the images are first for fb, then google, then github
                // if not, create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase() || profile.username,
                        image: profile.picture?.data?.url || profile.picture || profile.avatar_url
                    });
                }
                return true;

            } catch (error) {

                console.log(error);

                return false;
            }
        }
    }
});

export { handler as GET, handler as POST };