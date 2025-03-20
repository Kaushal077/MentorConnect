import Performance from "../models/Performance.js";
import { responseHandler } from "../utils/responseHandler.js";

// Log user performance
export const logPerformance = async (req, res) => {
  try {
    const { mentorId, progress, challenges } = req.body;

    const performance = new Performance({ user: req.user.id, mentorId, progress, challenges });
    await performance.save();

    return responseHandler(res, 201, "Performance logged successfully", performance);
  } catch (error) {
    return responseHandler(res, 500, "Error logging performance", error.message);
  }
};

// Get performance data for a student
export const getPerformanceData = async (req, res) => {
  try {
    const performance = await Performance.find({ user: req.user.id });

    return responseHandler(res, 200, "Performance data retrieved successfully", performance);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching performance data", error.message);
  }
};
