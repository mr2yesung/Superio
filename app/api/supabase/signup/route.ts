import { signUpCredentials } from "@/app/_lib/authSupabaseQuery";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  if (req.method !== "POST")
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });

  const { email, password } = await req.json();

  if (!email || !password)
    return NextResponse.json({ error: "Missing data" }, { status: 400 });

  const response = await signUpCredentials(email, password);

  if (response.status === "error")
    return NextResponse.json(
      { error: response.message },
      { status: response.code }
    );

  return NextResponse.json({ status: 200 });
}

export { handler as POST };
