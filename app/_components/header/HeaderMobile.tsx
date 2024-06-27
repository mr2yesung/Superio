"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import Logo from "../logo/Logo";
import { usePathname } from "next/navigation";
import SocialLinks from "../social-links/SocialLinks";

type HeaderMobileProps = {
  navbarComponents: {
    name: string;
    href: string;
  }[];
};

function HeaderMobile({ navbarComponents }: HeaderMobileProps) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathName = usePathname();

  function handleOpenNavbar() {
    setIsNavbarOpen(true);
  }

  function handleCloseNavbar() {
    setIsNavbarOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_6px_15px_#404f680d] xl:hidden">
      <div className="div-container">
        <div className="flex justify-between items-center">
          <div className="relative flex items-center">
            <HeaderLogo />

            <div
              className={`fixed top-0 left-0 w-screen h-screen bg-black transition-opacity z-[100] ${
                isNavbarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
              }`}
              onClick={handleCloseNavbar}
            ></div>

            <div
              className={`${
                isNavbarOpen ? "translate-x-0" : "-translate-x-full"
              } fixed top-0 left-0 bottom-0 z-[150] flex flex-col max-w-full w-[320px] min-h-screen overflow-y-auto bg-white bg-clip-padding outline-0 border-r-[1px] border-solid border-r-[rgba(0,0,0,.175)] transition-transform duration-300 ease-in-out`}
            >
              <div className="flex justify-between items-center py-5 px-[15px]">
                <Logo />

                <button className="cursor-pointer" onClick={handleCloseNavbar}>
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
                  <ul className="p-0 m-0 flex flex-col">
                    {navbarComponents.map(({ name, href }) => (
                      <li key={name} className="w-full p-0 m-0">
                        <Link
                          href={href}
                          className={`flex items-center text-base h-[50px] cursor-pointer px-5 hover:bg-[rgb(243,243,243)] transition-all duration-300 ${
                            pathName === href
                              ? "bg-[rgb(243,243,243)] text-primary"
                              : ""
                          }`}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
                      <span className="text-[#7e7e7e] block">Call us</span>

                      <Link
                        href={"tel:9498361299"}
                        className="text-[#555] cursor-pointer"
                      >
                        949 836 1299
                      </Link>
                    </div>

                    <span className="text-sm leading-[30px] text-[#7e7e7e] block">
                      Irvine, CA
                    </span>

                    <Link
                      href={"mailto:yeseonk@uci.edu"}
                      className="text-sm leading-[30px] text-[#7e7e7e]"
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
          </div>

          <div className="relative flex justify-center items-center">
            <Link href="/login" className="cursor-pointer">
              <Image
                width={24}
                height={24}
                src={"/images/icons/user.svg"}
                alt="Login / Register"
              />
            </Link>

            <button className="cursor-pointer ml-5" onClick={handleOpenNavbar}>
              <Image
                width={30}
                height={30}
                src={"/images/icons/menu.svg"}
                alt={"Menu"}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
