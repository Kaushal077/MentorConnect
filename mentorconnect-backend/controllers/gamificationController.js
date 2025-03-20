import Gamification from "../models/Gamification.js";
import { responseHandler } from "../utils/responseHandler.js";

// Get user points
export const getUserPoints = async (req, res) => {
  try {
    const points = await Gamification.findOne({ user: req.user.id });

    return responseHandler(res, 200, "User points retrieved", points);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching user points", error.message);
  }
};

// Award a badge to a user
export const awardBadge = async (req, res) => {
  try {
    const updated = await Gamification.findOneAndUpdate(
      { user: req.user.id },
      { $push: { badges: req.body.badge } },
      { new: true }
    );

    return responseHandler(res, 200, "Badge awarded successfully", updated);
  } catch (error) {
    return responseHandler(res, 500, "Error awarding badge", error.message);
  }
};
