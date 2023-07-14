import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center custom_gradient">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="custom_gradient text-center"> Prompts Powered for AI </span>
            </h1>
            <p className="desc text-center">
                Unleash your creativity on RizzyPrompts, a platform where users can share, discover, and create captivating prompts designed for seamless integration with AI technologies.
            </p>

            <Feed />
        </section>
    )
}

export default Home
