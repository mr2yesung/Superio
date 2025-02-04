"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "../../logo/Logo";

type MobileSidebarControllerProps = {
  children: React.ReactNode;
};

function MobileSidebarController({ children }: MobileSidebarControllerProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleOpenSidebar() {
    setIsSidebarOpen(true);
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  // not rerendering on certain route change?

  return (
    <>
      <button className="cursor-pointer ml-5" onClick={handleOpenSidebar}>
        <Image
          width={30}
          height={30}
          src={"/images/icons/menu.svg"}
          alt={"Menu"}
        />
      </button>

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

        {children}
      </div>
    </>
  );
}

export default MobileSidebarController;
