"use client";

import ButtonPrimary from "../button/ButtonPrimary";
import { signOutUser } from "@/app/_utils/authClient";

function Logout() {
  // TODO: adjust style and props
  return (
    <ButtonPrimary
      className="min-w-40 rounded-lg font-normal text-[15px] leading-5 py-[15px]"
      onClick={signOutUser}
    >
      Logout
    </ButtonPrimary>
  );
}

export default Logout;
