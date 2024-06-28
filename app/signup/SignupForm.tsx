"use client";

import { useState } from "react";
import FormElement from "../_components/form/FormElement";
import ButtonPrimary from "../_components/button/ButtonPrimary";

type userType = "candidate" | "employer";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<userType>("candidate");

  return (
    <form className="flex flex-col justify-center gap-y-5 mb-[10px]">
      <div className="mb-[10px] flex flex-col gap-y-[10px] w-full justify-center items-center">
        <UserTypeButton
          userType={userType}
          buttonUserType="candidate"
          setUserType={setUserType}
        >
          <UserIcon />
          Candidate
        </UserTypeButton>

        <UserTypeButton
          userType={userType}
          buttonUserType="employer"
          setUserType={setUserType}
        >
          <BagIcon />
          Employer
        </UserTypeButton>
      </div>

      <FormElement
        label="Username"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormElement
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonPrimary
        type="submit"
        className="min-w-40 rounded-lg font-normal text-[15px] leading-5 py-[15px]"
      >
        Sign Up
      </ButtonPrimary>
    </form>
  );
}

export default SignupForm;

type UserTypeButtonProps = {
  userType: userType;
  setUserType: React.Dispatch<React.SetStateAction<userType>>;
  buttonUserType: userType;
  children: React.ReactNode;
};

function UserTypeButton({
  userType,
  setUserType,
  buttonUserType,
  children,
}: UserTypeButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setUserType(buttonUserType)}
      className={`w-full cursor-pointer text-center flex justify-center items-center flex-nowrap gap-x-1.5 text-base leading-5 font-normal py-[15px] rounded-lg transition-colors duration-500 ${
        userType === buttonUserType
          ? "bg-[#34a853] text-white"
          : "bg-[#e2eaf8] text-primary hover:text-white hover:bg-primary-hover"
      }`}
    >
      {children}
    </button>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
    </svg>
  );
}
