import Chat from "../models/Chat.js";
import { responseHandler } from "../utils/responseHandler.js";

// Send a new message
export const sendMessage = async (req, res) => {
  try {
    const message = new Chat({ sender: req.user.id, receiver: req.body.receiver, text: req.body.text });
    await message.save();

    return responseHandler(res, 201, "Message sent successfully", message);
  } catch (error) {
    return responseHandler(res, 500, "Error sending message", error.message);
  }
};

// Get chat messages between two users
export const getMessages = async (req, res) => {
  try {
    const messages = await Chat.find({
      $or: [
        { sender: req.user.id, receiver: req.params.receiverId },
        { sender: req.params.receiverId, receiver: req.user.id },
      ],
    });

    return responseHandler(res, 200, "Messages retrieved successfully", messages);
  } catch (error) {
    return responseHandler(res, 500, "Error fetching messages", error.message);
  }
};
