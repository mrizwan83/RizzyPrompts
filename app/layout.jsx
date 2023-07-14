import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
    title: "RizzyPrompts - Discover, Share, and Create Prompts for AI",
    description: "Explore a collection of AI prompts, share your own ideas, collaborate with others, and vote on the most inspiring prompts in the field of artificial intelligence."
}




const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <link rel="icon" type="image/svg" href="/assets/images/logo.svg" />
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                        <Footer />
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
