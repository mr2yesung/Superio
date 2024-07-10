"use client";

import Image from "next/image";
import ButtonLightSecondary from "../_components/button/ButtonLightSecondary";
import { useState } from "react";

type DashboardSidebarControllerProps = {
  children: React.ReactNode;
};

function DashboardSidebarController({
  children,
}: DashboardSidebarControllerProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleOpenSidebar() {
    setIsSidebarOpen(true);
  }

  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <div className="mx-0 mb-6 w-fit xl:hidden">
        <ButtonLightSecondary
          className="text-sm leading-[25px] px-[30px] py-[10px] rounded-lg flex items-center justify-center gap-x-[10px]"
          onClick={handleOpenSidebar}
        >
          <Image
            width={14}
            height={14}
            src={"/images/icons/menu-blue.svg"}
            alt={"Menu"}
          />
          Menu
        </ButtonLightSecondary>
      </div>

      {/* Dashboard Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 bottom-0 h-full bg-white overflow-auto border-[#ecedf2] border-[1px] shadow-[0_6px_15px_#404f680d] transition-transform w-[300px] xl:translate-x-0 xxl:w-[365px]`}
      >
        <div className="header-span">
          <div className="pt-5 pr-[15px] flex items-center justify-end xl:hidden">
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
      </div>
    </>
  );
}

export default DashboardSidebarController;
