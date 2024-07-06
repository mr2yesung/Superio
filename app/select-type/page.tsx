import { Metadata } from "next";
import LoginWrapper from "../_components/wrapper/LoginWrapper";
import UserTypeForm from "./UserTypeForm";

const metadata: Metadata = {
  title: "Select User Type",
  description: "Select User Type",
};

function SelectUserType() {
  return (
    <LoginWrapper>
      <h3 className="text-2xl leading-[33px] font-medium text-text-primary mb-8">
        Select User Type
      </h3>

      <UserTypeForm />
    </LoginWrapper>
  );
}

export default SelectUserType;
export { metadata };
