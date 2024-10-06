'use server';

import { destroySession } from "@/shared/session/server-side";

export async function signOut() {
  try {
    await destroySession();
    return { success: true };
  } catch {
    return { success: false };
  }
}