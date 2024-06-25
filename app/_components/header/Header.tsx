"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Header() {
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

  const navbarComponents = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/job" },
    { name: "Employers", href: "/employer" },
    { name: "Messages", href: "/dashboard/message" },
  ];

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all ${
        isNavbarFixed ? "fixed animate-slide-in-down" : "absolute"
      }`}
    >
      <div className="hidden relative xl:flex justify-between items-center py-0 px-[60px] max-w-[1920px] mx-auto my-0">
        <div className="flex relative items-center">
          <div className="flex relative items-center py-[15px] mr-[60px] z-10 transition-all xxl:mr-[100px] xxl:py-[25px]">
            <Link href={"/"}>
              <Image
                width={154}
                height={50}
                src="/images/logo.svg"
                alt="Superio Logo"
              />
            </Link>
          </div>

          <nav className="flex flex-wrap pl-0 mb-0">
            <ul className="flex items-center p-0 m-0">
              {navbarComponents.map(({ name, href }) => (
                <li key={name} className="mr-[35px] xxl:mr-[40px]">
                  <Link
                    key={name}
                    href={href}
                    className={`relative px-0 py-5 transition-all cursor-pointer hover:text-primary ${
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
            <button className="relative inline-flex overflow-hidden justify-center items-center text-center transition-all text-primary bg-[#e2eaf8] font-normal text-[14px] rounded-[8px] min-w-[100px] py-2 px-5 ml-5 xxl:min-w-[140px] xxl:text-[15px] xxl:px-[35px] xxl:pt-[18px] xxl:pb-[15px] hover:text-white hover:bg-primary-hover focus-visible:outline-0">
              Login / Register
            </button>

            <Link
              href={"/dashboard/post-job"}
              className="relative inline-flex overflow-hidden justify-center items-center text-center transition-all text-white bg-primary font-normal text-[14px] rounded-[8px] min-w-[100px] py-2 px-5 ml-5 xxl:min-w-[140px] xxl:text-[15px] xxl:px-[35px] xxl:pt-[18px] xxl:pb-[15px] hover:bg-primary-hover focus-visible:outline-0"
            >
              Job Post
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
