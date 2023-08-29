const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
        },
        thoughts: [{
            // array of _id values referencing thought model
            type: Schema.Types.ObjectID,
            ref: 'Thought'
        }]
    }
)

const User = model('user', userSchema);

module.exports = User

// schema settings: Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// username:
    // string
    // unique
    // required
    // trimmed

// email:
    // string
    // required
    // unique
    // must match valid emaila ddress. Mongoose validation

// thoughts:
    // array of _id values referencing thought model
// friends:
    // array of _id values referencing User model (self-reference)