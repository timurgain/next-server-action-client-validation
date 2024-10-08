import { z } from "zod";
import { Fields } from "../types";

export const signUpSchema = z.object({
  [Fields.username]: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" })
    .trim(),
  [Fields.email]: z.string().email({ message: "Invalid email address" }).trim(),
  [Fields.password]: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" })
    .trim(),
});
