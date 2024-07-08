import HeaderLogo from "../HeaderLogo";
import HeaderScrollWrapper from "../wrapper/HeaderScrollWrapper";
import NavLink from "../NavLink";
import HeaderMonitorRight from "./HeaderMonitorRight";

type HeaderMonitorProps = {
  navbarComponents: { name: string; href: string }[];
};

async function HeaderMonitor({ navbarComponents }: HeaderMonitorProps) {
  return (
    <HeaderScrollWrapper>
      <div className="hidden relative xl:flex justify-between items-center py-0 px-[60px] max-w-[1920px] mx-auto my-0">
        <div className="flex relative items-center">
          <HeaderLogo />

          <nav className="flex flex-wrap pl-0 mb-0">
            <ul className="flex items-center p-0 m-0">
              {navbarComponents.map(({ name, href }) => (
                <li key={name} className="mr-[35px] xxl:mr-[40px]">
                  <NavLink
                    href={href}
                    baseClassName="relative px-0 py-5 transition-all duration-300 cursor-pointer hover:text-primary"
                    activeClassName="text-primary"
                    inActiveClassName="text-text-primary"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative flex justify-center items-center">
          <HeaderMonitorRight />
        </div>
      </div>
    </HeaderScrollWrapper>
  );
}

export default HeaderMonitor;
