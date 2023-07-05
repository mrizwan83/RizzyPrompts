import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

// The "models" object is provided by MongoDB library and stores all registered models
// If a model exists it assigns the existing model 
// This prevents redifining the model and ensures that existing model is reused.
// if a model doesn't exist it will call the "model" fucnion from mongoose to create a new model
// the model is then assigned to the proper variable
// always on always ready backend server usually we do this
// const User = model("User", UserSchema);

// export default User;

// nextjs implementation with serverless

const User = models.User || model("User", UserSchema);

export default User;