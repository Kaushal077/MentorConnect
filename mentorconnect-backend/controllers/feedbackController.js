import Feedback from "../models/Feedback.js";
import { responseHandler } from "../utils/responseHandler.js";

// Submit feedback
export const submitFeedback = async (req, res) => {
  try {
    const { mentorId, rating, comment } = req.body;
    
    const feedback = new Feedback({ user: req.user.id, mentorId, rating, comment });
    await feedback.save();

    return responseHandler(res, 201, "Feedback submitted successfully", feedback);
  } catch (error) {
    return responseHandler(res, 500, "Error submitting feedback", error.message);
  }
};

// Get feedback for a specific mentor
export const getMentorFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({ mentorId: req.params.mentorId });

    return responseHandler(res, 200, "Mentor feedback retrieved successfully", feedback);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching mentor feedback", error.message);
  }
};
