"use server";
import { z } from "zod";
import { Fields, FormState } from "../types";
import { createSession } from "@/shared/session";

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
    };
  }

  // 2. Prepare data for sending further on the backend

  const data = validatedFields.data;

  // 3. Call the backend API

  let mockTokens;
  try {
    // Mock server request
    const request = new Promise((resolve) =>
      setTimeout(() => {
        resolve(data);
      }, 1000)
    );
    mockTokens = await request;
    mockTokens = {
      access: "mock_access_token",
      refresh: "mock_refresh_token",
    };

    await createSession(mockTokens);
  } catch (error) {
    return {
      message: `Registration error: ${error}`,
    };
  }
}
