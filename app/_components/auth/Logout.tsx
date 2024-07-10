"use client";

import { signOutUser } from "@/app/_utils/authClient";

function Logout() {
  return (
    <button
      className="cursor-pointer w-full flex justify-start items-center gap-x-[15px] font-normal text-[15px] text-text-secondary text-left rounded-lg leading-[30px] py-[10px] px-[25px] transition-colors xxl:px-[30px] hover:text-primary hover:bg-[rgba(25,103,210,.1)]"
      onClick={signOutUser}
    >
      Logout
    </button>
  );
}

export default Logout;
