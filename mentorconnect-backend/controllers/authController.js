import User from "../models/User.js";
import { clerkClient } from "../services/clerkService.js";
import { responseHandler } from "../utils/responseHandler.js";

// Register a new user using Clerk
export const registerUser = async (req, res) => {
  try {
    const { email, username } = req.body;
    const clerkUser = await clerkClient.users.createUser({ email, username });

    const newUser = new User({ clerkId: clerkUser.id, email, username });
    await newUser.save();

    return responseHandler(res, 201, "User registered successfully", newUser);
  } catch (error) {
    return responseHandler(res, 500, "Error registering user", error.message);
  }
};

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.user.id });

    if (!user) return responseHandler(res, 404, "User not found");

    return responseHandler(res, 200, "User profile fetched", user);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching user profile", error.message);
  }
};
