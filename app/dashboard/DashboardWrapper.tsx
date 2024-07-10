import NavLink from "../_components/header/NavLink";
import Logout from "../_components/auth/Logout";
import DashboardSidebarController from "./DashboardSidebarController";

type DashboardWrapperProps = {
  title: string;
  children: React.ReactNode;
};

function DashboardWrapper({ title, children }: DashboardWrapperProps) {
  // change by userType
  // userType === "employer"
  const dashboardNavbar = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
    },
    {
      name: "Post Job",
      href: "/dashboard/post-job",
    },
    {
      name: "Manage Jobs",
      href: "/dashboard/manage-jobs",
    },
    {
      name: "Messages",
      href: "/dashboard/message",
    },
  ];
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
    <div className="pt-10 px-[15px] md:px-[30px] xxl:pt-[60px] xxl:px-[60px]">
      <div className="mb-10 xxl:mb-[60px] dashboard-left-span">
        <h3 className="mb-[5px] text-2xl leading-[1.3em] font-medium text-text-primary md:mb-[10px] md:text-3xl md:leading-[41px]">
          {title}
        </h3>
        <p className="text-text-secondary text-[15px] leading-6 font-normal">
          Ready to jump back in?
        </p>
      </div>

      <DashboardSidebarController>
        <div className="pt-5 pb-10 px-[30px] xxl:p-[60px]">
          <ul className="w-full flex flex-col justify-center items-center gap-y-1">
            {dashboardNavbar.map((item) => (
              <li className="w-full" key={item.name}>
                <NavLink
                  href={item.href}
                  baseClassName="cursor-pointer w-full flex justify-start items-center gap-x-[15px] font-normal text-[15px] text-left rounded-lg leading-[30px] py-[10px] px-[25px] transition-colors xxl:px-[30px] hover:text-primary hover:bg-[rgba(25,103,210,.1)]"
                  activeClassName="text-primary bg-[rgba(25,103,210,.1)]"
                  inActiveClassName="text-text-secondary"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li className="w-full">
              <Logout />
            </li>
          </ul>

          <div className="mt-[55px]">
            <h4 className="font-medium text-base leading-[22px] text-text-primary mb-5">
              Profile Completion
            </h4>
            <p className="font-normal text-sm leading-6 text-text-secondary mb-[25px]">
              Increase your chance of getting hired by updating your profile.
              Your profile is <span className="font-medium">50%</span>{" "}
              completed.
            </p>
            {/* <p className="font-normal text-sm leading-6 text-text-secondary mb-[25px]">
                Increase your chance of finding talented candidates by updating
                your profile. Your profile is{" "}
                <span className="font-medium">50%</span> completed.
              </p> */}

            <div className="w-[200px] h-[200px] mx-auto">
              {/* circular progress bar? */}
            </div>
          </div>
        </div>
      </DashboardSidebarController>

      <div className="dashboard-left-span">{children}</div>
    </div>
  );
}

export default DashboardWrapper;
