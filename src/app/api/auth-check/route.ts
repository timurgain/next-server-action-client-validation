import { getSession, isAccessTokenExpired } from "@/shared/session/server-side";
import { type NextRequest } from "next/server";

export enum AUTH_STATUS {
  UNAUTHORIZED = 401,
  AUTHORIZED = 200,
}

export async function GET(request: NextRequest) {
  const session = await getSession();
  const expiresAt = session?.expiresAt;
  if (!session || !expiresAt || isAccessTokenExpired(expiresAt)) {
    return new Response("Unauthorized", { status: AUTH_STATUS.UNAUTHORIZED });
  }
  return new Response("Authorized", { status: AUTH_STATUS.AUTHORIZED });
}
