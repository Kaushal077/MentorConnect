import express from "express";
import { createGoal, getGoals, updateGoalStatus } from "../controllers/goalController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createGoal);
router.get("/", authMiddleware, getGoals);
router.put("/:goalId", authMiddleware, updateGoalStatus);

export default router;
