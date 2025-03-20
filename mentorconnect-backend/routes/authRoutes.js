import express from "express";
import { registerUser, getUserProfile } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/profile", authMiddleware, getUserProfile);

export default router;
