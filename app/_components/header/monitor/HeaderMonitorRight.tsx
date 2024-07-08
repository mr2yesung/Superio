"use client";

import Link from "next/link";
import Logout from "../../auth/Logout";
import { useSession } from "next-auth/react";

function HeaderMonitorRight() {
  const { status } = useSession();

  // change to user icon with dropdown menu
  if (status === "authenticated") return <Logout />;

  return (
    <>
      <Link
        href={"/dashboard/cv"}
        className="relative text-[15px] font-normal whitespace-nowrap text-primary cursor-pointer"
      >
        Upload your CV
      </Link>

      <div className="relative flex items-center">
        <Link
          href={"/login"}
          className="relative inline-flex overflow-hidden justify-center items-center text-center transition-all duration-300 text-primary bg-[#e2eaf8] font-normal text-[14px] rounded-[8px] min-w-[100px] py-2 px-5 ml-5 xxl:min-w-[140px] xxl:text-[15px] xxl:px-[35px] xxl:pt-[18px] xxl:pb-[15px] hover:text-white hover:bg-primary-hover"
        >
          Login / Register
        </Link>

        <Link
          href={"/dashboard/post-job"}
          className="relative inline-flex overflow-hidden justify-center items-center text-center transition-all duration-300 text-white bg-primary font-normal text-[14px] rounded-[8px] min-w-[100px] py-2 px-5 ml-5 xxl:min-w-[140px] xxl:text-[15px] xxl:px-[35px] xxl:pt-[18px] xxl:pb-[15px] hover:bg-primary-hover"
        >
          Job Post
        </Link>
      </div>
    </>
  );
}

export default HeaderMonitorRight;
