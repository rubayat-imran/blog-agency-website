import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        short_description: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const BlogsModel = mongoose.model("blogs", BlogSchema);

export default BlogsModel;