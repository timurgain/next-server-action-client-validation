'use server';

import { APP_URL } from "@/app/constants/urls";
import { destroySession } from "@/shared/session";
import { redirect } from "next/navigation";

export async function signOut() {
  destroySession();
  redirect(APP_URL.MAIN);
}