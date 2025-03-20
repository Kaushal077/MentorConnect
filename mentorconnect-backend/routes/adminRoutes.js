import express from "express";
import { getAllUsers, deleteUser } from "../controllers/adminController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
router.delete("/user/:userId", authMiddleware, deleteUser);

export default router;
