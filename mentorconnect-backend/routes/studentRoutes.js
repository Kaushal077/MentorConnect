import express from "express";
import { getStudents, updateStudentProfile } from "../controllers/studentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getStudents);
router.put("/update", authMiddleware, updateStudentProfile);

export default router;
