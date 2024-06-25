import Link from "next/link";
import Logo from "../logo/Logo";

function HeaderLogo() {
  return (
    <div className="flex relative items-center py-[15px] mr-[60px] z-10 xxl:mr-[100px] xxl:py-[25px]">
      <Link href={"/"}>
        <Logo className="h-[40px] xl:h-[50px] w-auto" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
