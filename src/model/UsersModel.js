import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        mobile: { type: String, required: true },
        password: { type: String, unique: true, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UsersModel = mongoose.model("users", UserSchema);

export default UsersModel;