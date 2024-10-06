"use server";
import { z } from "zod";
import { Fields, FormState } from "../types";
import { createSession } from "@/shared/session/server-side";
import { auth_api } from "../api";

const schema = z.object({
  [Fields.email]: z.string().email({ message: "Invalid email address" }).trim(),
  [Fields.password]: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" })
    .trim(),
});

export async function getAccessToken(state: FormState, formData: FormData) {
  // 1. Validate form fields

  const rowData = {
    [Fields.email]: formData.get(Fields.email),
    [Fields.password]: formData.get(Fields.password),
  };
  const validatedFields = schema.safeParse(rowData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // 2. Prepare data for sending further on the backend

  const data = validatedFields.data;

  // 3. Call the backend API and create a session

  let mockTokens;
  try {
    // Mock server request
    mockTokens = await auth_api.getTokens(data);
    await createSession(mockTokens);
  } catch (error) {
    return {
      message: `Registration error: ${error}`,
      success: false,
    };
  }

  return { success: true };
  // redirect(APP_URL.PROTECTED);
}
