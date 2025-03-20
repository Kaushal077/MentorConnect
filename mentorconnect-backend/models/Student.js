import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        interests: { type: [String] },
        assignedMentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
    },
    { timestamps: true }
);

export const Student = mongoose.model("Student", StudentSchema);
