const { Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            // use mongoose's objectId data tpe
            // Default value should be set to a new objectId
        },
        reactionBody: {
            type: String,
            required: true,
            // validate: 280 char max
        },
        username: {
            type: String,
            required: true,
            // validate 280 char max
        },
        createdAt: {
            // Date
            // Default to current timestamp
            // Use getter method to format timestamp on query
        }
    }
)

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.