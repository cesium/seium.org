import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_BACKOFFICE_FEATURE_FLAG === "false") {
    return NextResponse.redirect(new URL("/404", request.url));
  }
}

export const config = {
  matcher: [
    "/attendee/:path*",
    "/attendees/:path*",
    "/badge/:path*",
    "/product/:path*",
    "/register/:path*",
    "/sponsor/:path*",
    "/staff/:path*",
    "/forgot-password/:path*",
    "/login/:path*",
    "/reset/:path*",
    "/signup/:path*",
  ],
};
