import express from "express";
import { getUserPoints, awardBadge } from "../controllers/gamificationController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/points", authMiddleware, getUserPoints);
router.post("/badge", authMiddleware, awardBadge);

export default router;
