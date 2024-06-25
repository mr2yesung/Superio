"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";

type HeaderMonitorProps = {
  navbarComponents: { name: string; href: string }[];
};

function HeaderMonitor({ navbarComponents }: HeaderMonitorProps) {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const pathName = usePathname();

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  }

  useEffect(function () {
    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 bg-white ${
        isNavbarFixed
          ? "fixed animate-slide-in-down shadow-[0_0_10px_#0000001a]"
          : "absolute"
      }`}
    >
      <div className="hidden relative xl:flex justify-between items-center py-0 px-[60px] max-w-[1920px] mx-auto my-0">
        <div className="flex relative items-center">
          <HeaderLogo />

          <nav className="flex flex-wrap pl-0 mb-0">
            <ul className="flex items-center p-0 m-0">
              {navbarComponents.map(({ name, href }) => (
                <li key={name} className="mr-[35px] xxl:mr-[40px]">
                  <Link
                    key={name}
                    href={href}
                    className={`relative px-0 py-5 transition-all duration-300 cursor-pointer hover:text-primary ${
                      pathName === href ? "text-primary" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative flex justify-center items-center">
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
        </div>
      </div>
    </header>
  );
}

export default HeaderMonitor;
