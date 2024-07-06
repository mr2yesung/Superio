import { Metadata } from "next";

const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

function Dashboard() {
  return <h2 className="text-2xl my-44">Dashboard</h2>;
}

export default Dashboard;
export { metadata };
