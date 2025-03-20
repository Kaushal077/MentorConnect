import mongoose from "mongoose";

const GamificationSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        points: { type: Number, default: 0 },
        badges: { type: [String] },
    },
    { timestamps: true }
);

export const Gamification = mongoose.model("Gamification", GamificationSchema);
