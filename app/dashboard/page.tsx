import { Metadata } from "next";
import DashboardWrapper from "./DashboardWrapper";

const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

function Dashboard() {
  return (
    <DashboardWrapper title="Hello, Yeseong!">
      <div className="h-lvh">TEST</div>
    </DashboardWrapper>
  );
}

export default Dashboard;
export { metadata };
