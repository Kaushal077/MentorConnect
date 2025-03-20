import Goal from "../models/Goal.js";
import { responseHandler } from "../utils/responseHandler.js";

// Create a new goal
export const createGoal = async (req, res) => {
  try {
    const goal = new Goal({ ...req.body, user: req.user.id });
    await goal.save();

    return responseHandler(res, 201, "Goal created successfully", goal);
  } catch (error) {
    return responseHandler(res, 500, "Error creating goal", error.message);
  }
};

// Get all goals for a user
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    return responseHandler(res, 200, "Goals retrieved successfully", goals);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching goals", error.message);
  }
};

// Update goal status
export const updateGoalStatus = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.goalId, { status: req.body.status }, { new: true });

    if (!goal) return responseHandler(res, 404, "Goal not found");

    return responseHandler(res, 200, "Goal status updated", goal);
  } catch (error) {
    return responseHandler(res, 500, "Error updating goal", error.message);
  }
};
