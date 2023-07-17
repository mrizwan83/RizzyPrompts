import "@styles/globals.css";
import React from "react";
import Head from "next/head";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
    title: "RizzyPrompts - Discover, Share, and Create Prompts for AI",
    description:
        "Explore a collection of AI prompts, share your own ideas, collaborate with others, and vote on the most inspiring prompts in the field of artificial intelligence.",
    content: "ch-ua-form-factor=(*)"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <Head>
                <meta name="permissions-policy" content="ch-ua-form-factor=(*)" />
            </Head>
            <link rel="icon" type="image/ico" href="/assets/images/logo.ico" />
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                        <Footer />
                    </main>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
