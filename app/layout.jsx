import "@styles/globals.css";
import Head from 'next/head';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
    title: "RizzyPrompts - Discover, Share, and Create Prompts for AI",
    description: "Explore a collection of AI prompts, share your own ideas, collaborate with others, and vote on the most inspiring prompts in the field of artificial intelligence."
}




const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <link rel="icon" type="image/svg" href="/assets/images/logo.svg" />
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
