import { getServerSession } from "next-auth";
import { cache } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const getCurrentUser = cache(async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
});

export { getCurrentUser };
