import mongoose from "mongoose";

const PerformanceSchema = new mongoose.Schema(
    {
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
        mentorId: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor", required: true },
        progressScore: { type: Number, required: true },
        remarks: { type: String },
    },
    { timestamps: true }
);

export const Performance = mongoose.model("Performance", PerformanceSchema);
