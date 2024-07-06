import { postUserType } from "@/app/_lib/authSupabaseQuery";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  if (req.method !== "POST")
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });

  const { userType } = await req.json();

  if (!userType)
    return NextResponse.json({ error: "Missing data" }, { status: 400 });

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET ?? "",
    cookieName: "next-auth.session-token",
  });

  if (!token?.sub)
    return NextResponse.json(
      { error: "Missing or invalid token, sign in again" },
      { status: 401 }
    );

  const response = await postUserType(token.sub, userType);

  if (response.status === "error")
    return NextResponse.json(
      { error: response.message },
      { status: response.code }
    );

  return NextResponse.json({ status: 200 });
}

export { handler as POST };
