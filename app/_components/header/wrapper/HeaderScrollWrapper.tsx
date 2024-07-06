"use client";

import { useEffect, useState } from "react";

type HeaderScrollWrapperProps = {
  children: React.ReactNode;
};

function HeaderScrollWrapper({ children }: HeaderScrollWrapperProps) {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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
      className={`top-0 left-0 w-full z-50 ${
        isNavbarFixed
          ? "fixed animate-slide-in-down shadow-[0_0_10px_#0000001a] bg-white"
          : "absolute"
      }`}
    >
      {children}
    </header>
  );
}

export default HeaderScrollWrapper;
