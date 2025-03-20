import User from "../models/User.js";
import { responseHandler } from "../utils/responseHandler.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return responseHandler(res, 200, "All users retrieved successfully", users);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching users", error.message);
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    return responseHandler(res, 200, "User deleted successfully");
  } catch (error) {
    return responseHandler(res, 500, "Error deleting user", error.message);
  }
};
