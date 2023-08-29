const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            // Validation - between 1 and 280 characters
        },
        createdAt: {
            // built-in date method,
            // default must be current timestamp
            // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            // Array of nested documents created with the reaction schema
        }
    }
)

// Schema Settings:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.