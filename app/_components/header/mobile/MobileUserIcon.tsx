"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function MobileUserIcon() {
  const { status } = useSession();

  return (
    <Link
      href={status === "authenticated" ? "/dashboard" : "/login"}
      className="cursor-pointer"
    >
      <Image
        width={24}
        height={24}
        src={"/images/icons/user.svg"}
        alt="Login / Register"
      />
    </Link>
  );
}

export default MobileUserIcon;
