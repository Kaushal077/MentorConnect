import express from "express";
import { submitPerformance, getPerformance } from "../controllers/performanceController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, submitPerformance);
router.get("/", authMiddleware, getPerformance);

export default router;
