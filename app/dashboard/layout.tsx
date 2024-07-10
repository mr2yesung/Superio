import MainWrapper from "../_components/wrapper/MainWrapper";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

async function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <MainWrapper className="bg-primary-bg header-span">{children}</MainWrapper>
  );
}

export default DashboardLayout;

/**
 * TODO: when job post route, if user type not employer, redirect to dashboard with error toast (client side router)
 * TODO: when cv route, if user type not candidate, redirect to dashboard with error toast (client side router)
 */
