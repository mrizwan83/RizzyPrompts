import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required!'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required!'],
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    downvotes: {
        type: Number,
        default: 0,
    },
    votedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    voteTypes: [{
        type: String,
        enum: ['upvote', 'downvote'],
    }],
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;

// By using the enum option, you ensure that the voteTypes field can only accept valid vote types ('upvote' or 'downvote')
// and reject any other values that are not specified in the enumeration. 
// This helps maintain data integrity and ensures that only valid vote types are stored in the database.