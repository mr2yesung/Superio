import Link from "next/link";
import HeaderLogo from "../HeaderLogo";
import NavLink from "../NavLink";
import MobileSidebarController from "./MobileSidebarController";
import SocialLinks from "../../social-links/SocialLinks";
import Image from "next/image";

type HeaderMobileProps = {
  navbarComponents: {
    name: string;
    href: string;
  }[];
};

function HeaderMobile({ navbarComponents }: HeaderMobileProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_6px_15px_#404f680d] xl:hidden">
      <div className="div-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <HeaderLogo />
          </div>

          <div className="relative flex justify-center items-center">
            <Link href="/dashboard" className="cursor-pointer">
              <Image
                width={24}
                height={24}
                src={"/images/icons/user.svg"}
                alt="Login / Register"
              />
            </Link>

            <MobileSidebarController>
              <div className="relative w-full min-w-full border-t-[1px] border-solid border-t-[#efefef]">
                <nav className="overflow-x-hidden overflow-y-auto mt-[10px]">
                  <ul className="p-0 m-0 flex flex-col">
                    {navbarComponents.map(({ name, href }) => (
                      <li key={name} className="w-full p-0 m-0">
                        <NavLink
                          href={href}
                          baseClassName="flex items-center text-base h-[50px] cursor-pointer px-5 hover:bg-[rgb(243,243,243)] transition-all duration-300"
                          activeClassName="bg-[rgb(243,243,243)] text-primary"
                          inActiveClassName="text-text-primary"
                        >
                          {name}
                        </NavLink>
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
            </MobileSidebarController>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
