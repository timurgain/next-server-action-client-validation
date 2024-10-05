import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload, Tokens } from "../../features/UserLoginForm/types";

const SESSION = "session";
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = ""
): Promise<SessionPayload | undefined> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as SessionPayload;
  } catch {
    return undefined;
  }
}

export async function createSession(tokens: Tokens) {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const session = await encrypt({ ...tokens, expiresAt });

  cookies().set(SESSION, session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const session = cookies().get(SESSION)?.value;
  return await decrypt(session);
}

export async function destroySession() {
  cookies().delete(SESSION);
}
