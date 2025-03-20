import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema(
    {
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
        mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor", required: true },
        title: { type: String, required: true },
        description: { type: String },
        deadline: { type: Date, required: true },
        status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
    },
    { timestamps: true }
);

export const Goal = mongoose.model("Goal", GoalSchema);
