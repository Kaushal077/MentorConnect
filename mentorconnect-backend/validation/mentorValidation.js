import { z } from "zod";

export const mentorSchema = z.object({
  name: z.string().min(1, "Mentor name is required"),
  email: z.string().email("Invalid email format"),
  expertise: z.string().min(3, "Expertise is required"),
});
