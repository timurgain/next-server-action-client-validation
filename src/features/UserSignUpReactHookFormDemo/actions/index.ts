"use server";

import { SignUpFormData } from "../types";

export async function createUser(data: SignUpFormData) {
  // 1. Call the backend API

  try {
    // Mock server request
    const request = new Promise((resolve) =>
      setTimeout(() => {
        resolve(data);
      }, 1000),
    );
    await request;

    return {
      message: "User has been successfully registered",
      success: true,
    };
  } catch (error) {
    return {
      message: `Registration error: ${error}`,
      success: false,
    };
  }
}
