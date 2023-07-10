import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const GET = async (req) => {
    try {
        await connectToDB();
        // get all prompts populate the creator from the db
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts!", { status: 500 })
    }
}