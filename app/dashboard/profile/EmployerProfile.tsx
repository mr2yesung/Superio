import DashboardContentCard from "../DashboardContentCard";
import DashboardFooter from "../DashboardFooter";
import DashboardWrapper from "../DashboardWrapper";

function EmployerProfile() {
  // use form action
  // merge with candidate profile later
  return (
    <DashboardWrapper title="Company Profile">
      <div className="flex flex-col justify-center items-center w-full max-w-full gap-y-[30px]">
        <DashboardContentCard title="Profile Info">
          <div>1</div>
        </DashboardContentCard>
      </div>

      <DashboardFooter />
    </DashboardWrapper>
  );
}

export default EmployerProfile;
