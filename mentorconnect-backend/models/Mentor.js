import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        expertise: { type: [String], required: true },
        bio: { type: String },
        availability: { type: String },
    },
    { timestamps: true }
);

export const Mentor = mongoose.model("Mentor", MentorSchema);
