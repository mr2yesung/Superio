import { userType } from "@/app/_lib/types/userType";
import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    supabaseAccessToken?: string;
    user: {
      id: string;
      userType?: userType;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userType?: userType;
  }
}
