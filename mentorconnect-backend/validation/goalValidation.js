import { z } from "zod";

export const goalSchema = z.object({
  title: z.string().min(3, "Goal title must be at least 3 characters"),
  description: z.string().min(5, "Description is required"),
  deadline: z.string().optional(), 
});
