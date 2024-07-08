import HeaderMobile from "./mobile/HeaderMobile";
import HeaderMonitor from "./monitor/HeaderMonitor";

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
