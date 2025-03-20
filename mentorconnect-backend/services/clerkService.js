import { Clerk } from "@clerk/clerk-sdk-node";
import dotenv from "dotenv";

dotenv.config();

const clerk = new Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

export const getUserById = async (userId) => {
  try {
    return await clerk.users.getUser(userId);
  } catch (error) {
    console.error("Clerk Service Error:", error);
    throw new Error("Failed to fetch user.");
  }
};

export const createUser = async (email, firstName, lastName, password) => {
  try {
    return await clerk.users.createUser({
      emailAddress: [email],
      firstName,
      lastName,
      password,
    });
  } catch (error) {
    console.error("Clerk Service Error:", error);
    throw new Error("Failed to create user.");
  }
};
