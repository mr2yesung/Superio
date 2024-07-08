import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // getToken is more lightweight than getServerSession
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET ?? "",
    cookieName: "next-auth.session-token",
  });
  const pathname = req.nextUrl.pathname;

  console.log(token);
  console.log(pathname);

  if (pathname.startsWith("/dashboard")) {
    // redirect to login route when unauthenticated user access dashboard and its child page
    if (!token) return NextResponse.redirect(new URL("/login", req.url));

    // redirect to user type select route when unselected user access dashboard and its child page
    if (!token.userType) {
      return NextResponse.redirect(new URL("/select-type", req.url));
    }
  }

  // redirect to home route when authenticated user access login or signup page
  else if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    if (token) return NextResponse.redirect(new URL("/", req.url));
  }

  // redirect to home route when user with type selected access select type page
  else if (pathname.startsWith("/select-type")) {
    if (token?.userType) return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/dashboard/:path*", "/select-type"],
};

// config is not applied if exported as the following
// export { middleware, config };
