"use client";

import Image from "next/image";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

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

      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        handleCloseSidebar={handleCloseSidebar}
      >
        {children}
      </MobileSidebar>
    </>
  );
}

export default MobileSidebarController;
