import HeaderLogo from "../HeaderLogo";
import NavLink from "../NavLink";
import MobileSidebarController from "./MobileSidebarController";
import MobileUserIcon from "./MobileUserIcon";

type HeaderMobileProps = {
  navbarComponents: {
    name: string;
    href: string;
  }[];
};

async function HeaderMobile({ navbarComponents }: HeaderMobileProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_6px_15px_#404f680d] xl:hidden">
      <div className="div-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <HeaderLogo />
          </div>

          <div className="relative flex justify-center items-center">
            <MobileUserIcon />

            <MobileSidebarController>
              {/* side bar contents */}
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
            </MobileSidebarController>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
