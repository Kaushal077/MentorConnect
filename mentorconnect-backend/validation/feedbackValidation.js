import { z } from "zod";

export const feedbackSchema = z.object({
  mentorId: z.string().min(1, "Mentor ID is required"),
  studentId: z.string().min(1, "Student ID is required"),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
  comment: z.string().optional(),
});
