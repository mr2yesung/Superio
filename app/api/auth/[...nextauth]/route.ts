import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import jwt from "jsonwebtoken";
import { getUserType, signInCredentials } from "@/app/_lib/authSupabaseQuery";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const response = await signInCredentials(
          credentials.email,
          credentials.password
        );

        if (response.status === "error") return null;

        return {
          id: response.data.id,
          email: response.data.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.sub = user.id;

      // userType cannot be changed after assigning a value to the account
      // it is not recommended to call getUserType every time the jwt callback is called (when session is accessed)
      // only fetch userType when userType does not exist inside the token
      if (!token.userType) {
        const response = await getUserType(token.sub ?? "");

        if (response.status === "success")
          token.userType = response.data.userType;
      }

      return token;
    },
    async session({ session, user, token }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET ?? "";

      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          // check user exist
          sub: user?.id || token.id,
          email: user?.email || token.email,
          role: "authenticated",
        };

        session.supabaseAccessToken = jwt.sign(payload, signingSecret);
      }

      if (token.sub) session.user.id = token.sub;

      if (token.userType) session.user.userType = token.userType;

      return session;
    },
  },
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL ?? "",
    secret: process.env.SUPABASE_SERVICE_KEY ?? "",
  }),
  secret: process.env.NEXTAUTH_SECRET ?? "",
  session: {
    // session is stored as jwt (not in database)
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
