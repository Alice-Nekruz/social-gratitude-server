const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User' },
        title: {
            type: String,
            required: true,
        },
        text: String,
        imageUrl: String
    },
    {
        timestamps: true,
    }
);

const Post = model("Post", postSchema);

module.exports = Post;
