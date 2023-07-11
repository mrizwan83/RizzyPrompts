import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
// Get
export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        // get all prompts populate the creator from the db
        const prompt = await Prompt.findById(params.id).populate('creator');
        if (!prompt) {
            return new Response("Prompt not found!", { status: 404 });
        }
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompt!", { status: 500 })
    }
}
// update
export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json();
    try {
        await connectToDB();
        // find the prompt
        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found!", { status: 404 });
        }
        // update the prompt
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        // save to db
        await existingPrompt.save();
        // send back updated prompt
        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to update the prompt!", { status: 500 })
    }
}

// delete
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Failed to delete prompt", { status: 500 });
    }
}