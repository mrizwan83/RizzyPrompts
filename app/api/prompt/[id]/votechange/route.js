import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const PATCH = async (req, { params }) => {
    const { userId } = await req.json();
    try {
        await connectToDB();
        // find the prompt
        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found!", { status: 404 });
        }

        // Check if the user has already voted
        const userIndex = existingPrompt.votedBy.indexOf(userId);
        if (userIndex === -1) {
            return new Response("User has not voted on this prompt!", { status: 400 });
        }

        // Remove the user's vote from votedBy array
        existingPrompt.votedBy.splice(userIndex, 1);

        // Remove the corresponding vote type from voteTypes array
        const voteType = existingPrompt.voteTypes[userIndex];
        existingPrompt.voteTypes.splice(userIndex, 1);

        // Update the upvotes and downvotes count
        if (voteType === "upvote") {
            existingPrompt.upvotes--;
        } else if (voteType === "downvote") {
            existingPrompt.downvotes--;
        }

        // Save the updated prompt
        await existingPrompt.save();

        // Send back the updated prompt along with the voteType
        const responseData = {
            prompt: existingPrompt,
            voteType: voteType,
        };

        // Send back the updated prompt
        return new Response(JSON.stringify(responseData), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update the prompt! ${error}`, { status: 500 });
    }
};
