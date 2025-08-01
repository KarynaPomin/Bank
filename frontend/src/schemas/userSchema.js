import { email, z } from "zod";

export const registerSchema  = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(), 
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});