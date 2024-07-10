import { getServerSession } from "next-auth";
import { cache } from "react";
import { authOptions } from "./authOptions";

const getCurrentUser = cache(async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
});

export { getCurrentUser };
