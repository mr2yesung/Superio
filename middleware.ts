import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { getUserType } from "./app/_lib/authSupabaseQuery";

const loginRoute = "/login";
const signupRoute = "/signup";
const dashboardRoute = "/dashboard";
const selectUserTypeRoute = "/select-type";

async function middleware(req: NextRequest) {
  // getToken is more lightweight than getServerSession
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET ?? "",
    cookieName: "next-auth.session-token",
  });

  // redirect to login route when not authenticated
  if (req.nextUrl.pathname.startsWith(dashboardRoute)) {
    if (!token) return NextResponse.redirect(new URL(loginRoute, req.url));
  }

  // redirect to home route when authenticated (has auth token)
  else if (
    req.nextUrl.pathname.startsWith(loginRoute) ||
    req.nextUrl.pathname.startsWith(signupRoute)
  ) {
    if (token) return NextResponse.redirect(new URL("/", req.url));
  }

  // redirect to home route when user type is selected
  else if (req.nextUrl.pathname.startsWith(selectUserTypeRoute)) {
    if (token?.sub) {
      const response = await getUserType(token.sub);

      if (response.status === "success")
        return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

const config = {
  matcher: [
    loginRoute,
    signupRoute,
    `${dashboardRoute}/:path*`,
    selectUserTypeRoute,
  ],
};

export { middleware, config };
