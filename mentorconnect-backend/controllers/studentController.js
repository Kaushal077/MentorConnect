import Student from "../models/Student.js";
import { responseHandler } from "../utils/responseHandler.js";

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return responseHandler(res, 200, "Students retrieved successfully", students);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching students", error.message);
  }
};

// Update student profile
export const updateStudentProfile = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate({ clerkId: req.user.id }, req.body, { new: true });

    if (!student) return responseHandler(res, 404, "Student not found");

    return responseHandler(res, 200, "Student profile updated", student);
  } catch (error) {
    return responseHandler(res, 500, "Error updating student profile", error.message);
  }
};
