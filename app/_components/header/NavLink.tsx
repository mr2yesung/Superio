"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  baseClassName: string;
  activeClassName: string;
  inActiveClassName: string;
  children: React.ReactNode;
};

function NavLink({
  href,
  baseClassName,
  activeClassName,
  inActiveClassName,
  children,
}: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${baseClassName} ${
        pathName === href ? activeClassName : inActiveClassName
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
