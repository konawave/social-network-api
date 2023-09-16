const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            // trimmed
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // must match valid email address - validation
        },
        thoughts: [{
            // array of _id values referencing thought movel
            type: Schema.Types.ObjectID,
            ref: 'thought'
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