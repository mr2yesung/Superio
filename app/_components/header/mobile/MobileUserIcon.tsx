import { getCurrentUser } from "@/app/_lib/user";
import Image from "next/image";
import Link from "next/link";

async function MobileUserIcon() {
  const user = await getCurrentUser();

  return (
    <Link href={user ? "/dashboard" : "/login"} className="cursor-pointer">
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
