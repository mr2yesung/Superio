"use client";

import Logo from "../../logo/Logo";
import SocialLinks from "../../social-links/SocialLinks";
import Image from "next/image";
import Link from "next/link";

type MobileSidebarProps = {
  isSidebarOpen: boolean;
  handleCloseSidebar: () => void;
  children: React.ReactNode;
};

function MobileSidebar({
  isSidebarOpen,
  handleCloseSidebar,
  children,
}: MobileSidebarProps) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black transition-opacity z-[100] ${
          isSidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseSidebar}
      ></div>

      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 bottom-0 z-[150] flex flex-col max-w-full w-[320px] min-h-screen overflow-y-auto bg-white bg-clip-padding outline-0 border-r-[1px] border-solid border-r-[rgba(0,0,0,.175)] transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center py-5 px-[15px]">
          <Logo />

          <button className="cursor-pointer" onClick={handleCloseSidebar}>
            <Image
              width={32}
              height={32}
              src={"/images/icons/close.svg"}
              alt="Close"
            />
          </button>
        </div>

        <div className="relative w-full min-w-full border-t-[1px] border-solid border-t-[#efefef]">
          <nav className="overflow-x-hidden overflow-y-auto mt-[10px]">
            {/* navigation */}
            <ul className="p-0 m-0 flex flex-col">{children}</ul>
          </nav>
        </div>

        <div className="mt-[10px] pt-2 px-[15px]">
          <Link
            href={"/dashboard/post-job"}
            className="p-0 flex justify-center items-center w-full text-white h-[60px] rounded-[10px] text-center whitespace-nowrap bg-primary text-[15px] font-normal transition-all duration-300 hover:bg-primary-hover"
          >
            Job Post
          </Link>

          <div className="p-0">
            <div className="py-[18px] px-0">
              <div className="text-lg leading-7 mb-[13px] font-medium">
                <span className="text-text-secondary block">Call us</span>

                <Link
                  href={"tel:9498361299"}
                  className="text-[#555] cursor-pointer"
                >
                  949 836 1299
                </Link>
              </div>

              <span className="text-sm leading-[30px] text-text-secondary block">
                Irvine, CA
              </span>

              <Link
                href={"mailto:yeseonk@uci.edu"}
                className="text-sm leading-[30px] text-text-secondary"
              >
                yeseonk@uci.edu
              </Link>
            </div>
          </div>
        </div>

        <div className="pl-2">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export default MobileSidebar;
