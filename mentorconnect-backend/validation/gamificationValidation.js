import { z } from "zod";

export const gamificationSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  points: z.number().min(0, "Points cannot be negative"),
  badge: z.string().optional(),
});
