import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        job_title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },
        user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const TeamsModel = mongoose.model("teams", TeamSchema);

export default TeamsModel;