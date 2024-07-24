import Image from "next/image";
import ButtonLightSecondary from "../_components/button/ButtonLightSecondary";

type DashboardWrapperProps = {
  title: string;
  children: React.ReactNode;
};

function DashboardWrapper({ title, children }: DashboardWrapperProps) {
  // change by userType
  // userType === "employer"
  // const dashboardNavbar = [
  //   {
  //     name: "Dashboard",
  //     href: "/dashboard",
  //   },
  //   {
  //     name: "Profile",
  //     href: "/dashboard/profile",
  //   },
  //   {
  //     name: "Post Job",
  //     href: "/dashboard/post-job",
  //   },
  //   {
  //     name: "Manage Jobs",
  //     href: "/dashboard/manage-jobs",
  //   },
  //   {
  //     name: "Messages",
  //     href: "/dashboard/message",
  //   },
  // ];
  // userType === "candidate"
  // const dashboardNavbar = [
  //   {
  //     name: "Dashboard",
  //     href: "/dashboard",
  //   },
  //   {
  //     name: "Profile",
  //     href: "/dashboard/profile",
  //   },
  //   {
  //     name: "Resume",
  //     href: "/dashboard/resume",
  //   },
  //   {
  //     name: "Applied Jobs",
  //     href: "/dashboard/applied-jobs",
  //   },
  //   {
  //     name: "Messages",
  //     href: "/dashboard/message",
  //   },
  // ];

  return (
    <div className="pt-10 px-[15px] md:px-[30px] xxl:pt-[60px] xxl:px-[60px] max-w-[1920px] mx-auto">
      <div className="mb-10 xxl:mb-[60px]">
        <h3 className="mb-[5px] text-2xl leading-[1.3em] font-medium text-text-primary md:mb-[10px] md:text-3xl md:leading-[41px]">
          {title}
        </h3>
        <p className="text-text-secondary text-[15px] leading-6 font-normal">
          Ready to jump back in?
        </p>
      </div>

      {/* add dropdown menu instead */}
      <div className="mx-0 mb-6 w-fit">
        <ButtonLightSecondary className="text-sm leading-[25px] px-[30px] py-[10px] rounded-lg flex items-center justify-center gap-x-[10px]">
          <Image
            width={14}
            height={14}
            src={"/images/icons/menu-blue.svg"}
            alt={"Menu"}
          />
          Menu
        </ButtonLightSecondary>
      </div>

      {children}
    </div>
  );
}

export default DashboardWrapper;
