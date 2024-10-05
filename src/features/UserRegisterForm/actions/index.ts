"use server";
import { z } from "zod";
import { Fields, FormState } from "../types";
import { redirect } from "next/navigation";
import { APP_URL } from "@/app/constants/urls";

const schema = z.object({
  [Fields.username]: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" })
    .trim(),
  [Fields.email]: z
    .string()
    .email({ message: "Invalid email address" })
    .trim(),
  [Fields.password]: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" })
    .trim(),
});

export async function createUser(state: FormState, formData: FormData) {
  // 1. Validate form fields

  const rowData = {
    [Fields.username]: formData.get(Fields.username),
    [Fields.email]: formData.get(Fields.email),
    [Fields.password]: formData.get(Fields.password),
  };
  const validatedFields = schema.safeParse(rowData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database or sending further on the separate backend

  const data = validatedFields.data;

  // 3. Call the backend API

  try {
    // Mock server request
    const request = new Promise((resolve) =>
      setTimeout(() => {
        resolve(data);
      }, 1000)
    );
    await request;
  } catch (error) {
    return {
      message: `Registration error: ${error}`,
    };
  }

  // 4. Redirect to sign in page

  redirect(APP_URL.SIGN_IN)
}
