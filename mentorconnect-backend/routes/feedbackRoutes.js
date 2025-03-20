import express from "express";
import { submitFeedback, getFeedback } from "../controllers/feedbackController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, submitFeedback);
router.get("/:receiverId", authMiddleware, getFeedback);

export default router;
