import { sendNotification } from "./firebaseService.js";

export const notifyUser = async (userToken, title, message) => {
  try {
    await sendNotification(userToken, title, message);
  } catch (error) {
    console.error("Notification Service Error:", error);
    throw new Error("Failed to notify user.");
  }
};
