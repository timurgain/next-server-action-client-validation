import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./shared/session";
import { APP_URL } from "./app/constants/urls";

const protectedRoutes = [APP_URL.PRIVATE];
const authRoutes = [APP_URL.SIGN_IN, APP_URL.SIGN_UP];

async function manageRoutesPermissions(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const origin = request.nextUrl.origin;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAuthRoute = authRoutes.includes(path);

  // 1. Proceed to the next middleware if the route is not protected
  if (!isProtectedRoute && !isAuthRoute) return NextResponse.next();

  // 2. Read the session cookie
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  
  // 3. To the sign-in page
  const expiresAt = session?.expiresAt;
  if (isProtectedRoute && expiresAt === undefined) return NextResponse.redirect(origin + APP_URL.SIGN_IN);

  // 4. To the sign-in page. Implement refresh token instead of this
  const isAccsessExpired = (expiresAt ?? 0) < Date.now() - 5*60*1000;
  if (isProtectedRoute && isAccsessExpired) return NextResponse.redirect(origin + APP_URL.SIGN_IN);

  // 5. To the main page
  const isUserAuthenticated = session && !isAccsessExpired;
  if (isUserAuthenticated && isAuthRoute) return NextResponse.redirect(origin + APP_URL.MAIN);

  return NextResponse.next();
}


export default async function middleware(request: NextRequest) {
  return await manageRoutesPermissions(request);
}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
