import HeaderMobile from "./HeaderMobile";
import HeaderMonitor from "./HeaderMonitor";

function Header() {
  const navbarComponents = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/job" },
    { name: "Employers", href: "/employer" },
    { name: "Messages", href: "/dashboard/message" },
  ];

  return (
    <>
      <HeaderMonitor navbarComponents={navbarComponents} />
      <HeaderMobile navbarComponents={navbarComponents} />
    </>
  );
}

export default Header;
