import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
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

const ServicesModel = mongoose.model("Services", ServiceSchema);

export default ServicesModel;