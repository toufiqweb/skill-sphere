import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session) {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    // Preserve original logic for other protected routes (like /checkout)
    const loginUrl = new URL("/signin", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Role Validation Engine for dashboard routes
  const role = session.user?.role || "student";

  if (pathname.startsWith("/dashboard/admin")) {
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/forbidden", request.url));
    }
  } else if (pathname.startsWith("/dashboard/instructor")) {
    if (role !== "instructor" && role !== "admin") {
      return NextResponse.redirect(new URL("/forbidden", request.url));
    }
  } else if (pathname.startsWith("/dashboard/student")) {
    if (role !== "student") {
      return NextResponse.redirect(new URL("/forbidden", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/checkout_sessions", "/dashboard/:path*"],
};
