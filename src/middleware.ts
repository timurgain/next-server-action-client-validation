import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./shared/session";
import { APP_URL } from "./app/constants/urls";

const protectedRoutes = [APP_URL.PRIVATE];
const authRoutes = [APP_URL.SIGN_IN, APP_URL.SIGN_UP];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);

  if (!isProtected) return NextResponse.next();

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  const expiresAt = session?.expiresAt;

  const isAccsessExpired = expiresAt > Date.now() - 5 * 60 * 1000;
}
