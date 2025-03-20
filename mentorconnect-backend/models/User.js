import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        clerkId: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        role: { type: String, enum: ["Mentor", "Student"], required: true },
        profileImage: { type: String },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
