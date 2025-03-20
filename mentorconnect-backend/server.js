import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import gamificationRoutes from "./routes/gamificationRoutes.js";
import performanceRoutes from "./routes/performanceRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/mentors", authMiddleware, mentorRoutes);
app.use("/api/students", authMiddleware, studentRoutes);
app.use("/api/goals", authMiddleware, goalRoutes);
app.use("/api/chats", authMiddleware, chatRoutes);
app.use("/api/gamification", authMiddleware, gamificationRoutes);
app.use("/api/performance", authMiddleware, performanceRoutes);
app.use("/api/feedback", authMiddleware, feedbackRoutes);
app.use("/api/admin", authMiddleware, adminRoutes);


app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
