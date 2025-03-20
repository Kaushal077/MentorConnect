import Mentor from "../models/Mentor.js";
import { responseHandler } from "../utils/responseHandler.js";

// Get all mentors
export const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    return responseHandler(res, 200, "Mentors retrieved successfully", mentors);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching mentors", error.message);
  }
};

// Update mentor profile
export const updateMentorProfile = async (req, res) => {
  try {
    const mentor = await Mentor.findOneAndUpdate({ clerkId: req.user.id }, req.body, { new: true });

    if (!mentor) return responseHandler(res, 404, "Mentor not found");

    return responseHandler(res, 200, "Mentor profile updated", mentor);
  } catch (error) {
    return responseHandler(res, 500, "Error updating mentor profile", error.message);
  }
};
