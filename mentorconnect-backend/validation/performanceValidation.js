import { z } from "zod";

export const performanceSchema = z.object({
  studentId: z.string().min(1, "Student ID is required"),
  mentorId: z.string().optional(),
  progress: z.number().min(0).max(100, "Progress must be between 0 and 100"),
});
