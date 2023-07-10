import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} and share extraordinary prompts on our innovative platform. Ignite imagination and explore the limitless possibilities of seamless integration.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder="Write your prompt here..."
                        required
                        className="form_textarea"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag {` `}
                        <span className="font-normal">(#programming, #webdevelopment, #idea, #chatgpt, #ruby)</span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder="#tag"
                        required
                        className="form_input"
                    />
                </label>

                <div className="flex-end"></div>
            </form>
        </section>
    )
}

export default Form
