import express from "express";
import { getMentors, updateMentorProfile } from "../controllers/mentorController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getMentors);
router.put("/update", authMiddleware, updateMentorProfile);

export default router;
