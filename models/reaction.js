// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

const { Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: function () {
              return new mongoose.Types.ObjectId();
            },
        },
        reactionBody: {
            type: String,
            required: true,
            max: [280]
        },
        username: {
            type: String,
            required: true,
            max: [280]
        },
        createdAt: {
            type: Date,
            default: Date.now
            // Use getter method to format timestamp on query
        }
    }
)

const Reaction = new model('reaction', reactionSchema)

module.exports = Reaction

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.