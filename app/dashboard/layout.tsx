import { getServerSession } from "next-auth";
import MainWrapper from "../_components/wrapper/MainWrapper";
import { getUserType } from "../_lib/authSupabaseQuery";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getServerSession(authOptions);
  const response = await getUserType(session?.user.id ?? "");

  if (response.status === "error") redirect("/select-type");

  return (
    <MainWrapper>
      {children}
      {/* testing purpose */}
      <h3 className="text-2xl">{response.data.userType}</h3>
    </MainWrapper>
  );
}

/**
 * TODO: when job post route, if user type not employer, redirect to dashboard with error toast (client side router)
 * TODO: when cv route, if user type not candidate, redirect to dashboard with error toast (client side router)
 */

export default DashboardLayout;
