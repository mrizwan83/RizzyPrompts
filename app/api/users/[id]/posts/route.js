import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        // get all prompts populate the creator from the db
        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all user prompts!", { status: 500 })
    }
}