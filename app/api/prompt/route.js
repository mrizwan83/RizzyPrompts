import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({})
            .populate('creator')
            .lean(); // Convert Mongoose documents to plain JavaScript objects

        // Calculate voteCount for each prompt and sort them
        prompts.forEach((prompt) => {
            prompt.voteCount = prompt.upvotes - prompt.downvotes;
        });
        prompts.sort((a, b) => b.voteCount - a.voteCount);

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all prompts!", { status: 500 });
    }
};
