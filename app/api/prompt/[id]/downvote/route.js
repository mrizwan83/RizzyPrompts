import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
// update
export const PATCH = async (req, { params }) => {
    const { userId } = await req.json();
    try {
        await connectToDB();
        // find the prompt
        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found!", { status: 404 });
        }
        // Perform the downvote
        existingPrompt.downvotes += 1;
        existingPrompt.votedBy.push(userId);
        existingPrompt.voteTypes.push('downvote');

        // Save the updated prompt
        await existingPrompt.save();
        // send back updated prompt
        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to update the prompt!", { status: 500 })
    }
}