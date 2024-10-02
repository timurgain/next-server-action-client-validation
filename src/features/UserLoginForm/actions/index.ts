"use server";
import { z } from "zod";
import { Fields, FormState } from "../types";

const schema = z.object({
  [Fields.email]: z
    .string()
    .email({ message: "Invalid email address" })
    .trim(),
  [Fields.password]: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" })
    .trim(),
});

export async function loginUser(state: FormState, formData: FormData) {
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

  // 2. Prepare data for insertion into database or sending further on the separate backend

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

  } catch (error) {
    return {
      message: `Registration error: ${error}`,
    };
  }

  console.log("mock backend response with tokens", mockTokens);

  // create session with token > set cookies > read cookies on request


  // 4. Transfer data to the client side

  // the simplest way is a direct transfer
  // return { mockTokens };

  // TODO:
  // 4. Create user session
  // 5. Redirect user
}
