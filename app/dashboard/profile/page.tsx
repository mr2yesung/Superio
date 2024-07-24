import { getCurrentUser } from "@/app/_lib/user";
import CandidateProfile from "./CandidateProfile";
import EmployerProfile from "./EmployerProfile";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

async function Profile() {
  const user = await getCurrentUser();

  if (user?.userType === "candidate") return <CandidateProfile />;
  else if (user?.userType === "employer") return <EmployerProfile />;

  // check userType in middleware?
  return null;
}

export default Profile;
export { metadata };
