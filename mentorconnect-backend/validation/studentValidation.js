import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(1, "Student name is required"),
  email: z.string().email("Invalid email format"),
  age: z.number().min(10, "Student must be at least 10 years old"),
});
